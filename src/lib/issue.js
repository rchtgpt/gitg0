const axios = require("axios");
const gitRemoteOriginUrl = require("git-remote-origin-url");
const reader = require("./funcs/jsonReader");
var emoji = require("node-emoji");
const chalk = require("chalk");
const { suggestCommitMsg } = require("./funcs/commit-gen");
const { branchName } = require("./funcs/generate");
var titleOfIssue;
let labelsOfIssue = [];
const fs = require("fs");
const { data } = require("retext");
const { exit } = require("process");
var finalIssueNumber;
let existingBranches = [];
let range = (n) => Array.from(Array(n).keys());

module.exports = {
  getIssue: async (issueNumber) => {
    const remoteRepoLink = await gitRemoteOriginUrl();
    const usernameWithRepoName = remoteRepoLink.slice(19);
    let username = usernameWithRepoName.split("/");
    username = username[0];
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(async function (response) {
        for (repo in response.data) {
          if (
            response.data[repo]["clone_url"] === (await gitRemoteOriginUrl())
          ) {
            var issueLink = response.data[repo]["issues_url"];
            var branchLink = response.data[repo]["branches_url"];
            finalBranchLink = branchLink.replace("{/branch}", "");
            finalIssueNumber = issueNumber.replace("#", "");
            axios
              .get(finalBranchLink)
              .then(function (branchNamesRes) {
                let branchData = branchNamesRes["data"];
                for (i in range(branchData.length)) {
                  existingBranches.push(branchData[i]["name"]);
                }
              })
              .catch((err) => {
                console.log(
                  chalk.bold.red(
                    "0opsie wo0psie couldn't fetch your branch names. Have you entered the correct Github Issue number?",
                    emoji.get(":cry:")
                  )
                );
                exit();
              });

            finalIssueLink = issueLink.replace(
              "{/number}",
              `/${finalIssueNumber}`
            );
            axios
              .get(finalIssueLink)
              .then(function (res) {
                titleOfIssue = res.data["title"];
                if (titleOfIssue !== "") {
                  res.data["labels"].forEach((element) => {
                    labelsOfIssue.push(element["name"]);
                  });
                  // console.log(emoji.get(':smiley_cat:'), chalk.bold('Github Issue Title:'), titleOfIssue);
                  reader.jsonReader("./.gitgo", (err, conf) => {
                    if (err) {
                      console.log("Error reading file:", err);
                      return;
                    }
                    conf.current_issue.title = titleOfIssue;
                    conf.current_issue.labels = labelsOfIssue;
                    conf.current_issue.number = finalIssueNumber;
                    conf.existing_branches = existingBranches;
                    fs.writeFile(
                      "./.gitgo",
                      JSON.stringify(conf, null, 2),
                      (err) => {
                        if (err) console.log("Error writing file:", err);
                      }
                    );
                  });
                  setTimeout(function () {
                    suggestCommitMsg();
                    branchName();
                  }, 6000);
                } else {
                  console.log(
                    chalk.red(
                      "We are facing some issues in the backend. Please try again later.",
                      emoji.get(":cry:")
                    )
                  );
                  exit();
                }
              })
              .catch((err) => {
                console.log(
                  chalk.bold.red(
                    "0opsie wo0psie couldn't fetch your issue title. Have you entered the correct Github Issue number?",
                    emoji.get(":cry:")
                  )
                );
                exit();
              });
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
