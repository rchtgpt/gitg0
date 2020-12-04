var inquirer = require("inquirer");
var emoji = require("node-emoji");
const fs = require("fs");
const { getIssue } = require("./issue.js");
const reader = require("./funcs/jsonReader.js");
const chalk = require("chalk");
const { recIssueType, issueType } = require("./funcs/rec-iss-type");
const { exit } = require("process");

module.exports = {
  getQuestions: async () => {
    inquirer
      .prompt([
        {
          // expects issue number as response
          type: "string",
          message: "Which issue are you working on today?",
          name: "issue",
        },
      ])
      .then((answer1) => {
        const _issueNumber = answer1["issue"];
        getIssue(_issueNumber);
        setTimeout(function () {
          reader.jsonReader("./.gitgo", (err, conf) => {
            if (err) {
              console.log("Error reading file:", err);
              return;
            }
            var title = conf.current_issue.title;
            console.log(
              emoji.get(":smiley_cat:"),
              chalk.bold("Github Issue Title:"),
              title
            );
          });
        }, 4000);
      })
      .then(() => {
        setTimeout(function () {
          recIssueType();
        }, 5000);
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't render in the current environment
        } else {
          // Something else went wrong
        }
      });
  },

  getConfigQuestions: async () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What commit guidelines do you follow?",
          name: "guidelines",
          choices: [
            `fix:, feat:, chore:`,
            `fix #`,
            `...(fix #)`,
            `Type your own, if multiple, separate with commas`,
          ],
        },
      ])
      .then((ans) => {
        if (
          ans["guidelines"] ===
          "Type your own, if multiple, separate with commas"
        ) {
          inquirer
            .prompt([
              {
                // expects issue number as response
                type: "string",
                message:
                  "Type your own guidelines, if multiple, separate with commas\n",
                name: "commit",
              },
            ])
            .then((ans1) => {
              reader.jsonReader("./.gitgo", (err, conf) => {
                if (err) {
                  console.log("Error reading file:", err);
                  return;
                }
                conf.commit_guidelines = ans1["commit"].split(",");
                conf.custom_guidelines = true;
                fs.writeFile(
                  "./.gitgo",
                  JSON.stringify(conf, null, 2),
                  (err) => {
                    if (err) console.log("Error writing file:", err);
                  }
                );
              });
              inquirer
                .prompt([
                  {
                    // expects issue number as response
                    type: "string",
                    message:
                      "Would you be using emojis in your commit messages?(y/N)",
                    name: "emojis",
                  },
                ])
                .then((ans2) => {
                  var emo = true;
                  if (ans2["emojis"] === "y" || ans2["emojis"] === "Y") {
                    console.log(
                      "\nWe have an awesome set of emojis in the .gitgo file which will be suggested to you in the commit messages.\n"
                    );
                  } else if (
                    ans2["emojis"] === "n" ||
                    ans2["emojis"] === "N" ||
                    ans2["emojis"] === ""
                  ) {
                    emo = false;
                  } else {
                    console.log(
                      `We don't know what you mean by "${
                        ans2["emojis"]
                      }" ${emoji.get(":cry:")}`
                    );
                    exit();
                  }
                  reader.jsonReader("./.gitgo", (err, conf) => {
                    if (err) {
                      console.log("Error reading file:", err);
                      return;
                    }
                    conf.use_emojis = emo;
                    conf.commit_config = true;
                    fs.writeFile(
                      "./.gitgo",
                      JSON.stringify(conf, null, 2),
                      (err) => {
                        if (err) console.log("Error writing file:", err);
                      }
                    );
                  });
                  console.log(
                    `\nSettings for your repo have been stored. Run ${chalk.yellow(
                      "gg start"
                    )} before working on an issue to get the branch name and commit title automatically. If you would like to change any settings manually, please edit the .gitgo file.\n`
                  );
                });
            });
        } else {
          reader.jsonReader("./.gitgo", (err, conf) => {
            if (err) {
              console.log("Error reading file:", err);
              return;
            }
            conf.commit_guidelines = ans["guidelines"].split(",");
            conf.custom_guidelines = false;
            fs.writeFile("./.gitgo", JSON.stringify(conf, null, 2), (err) => {
              if (err) console.log("Error writing file:", err);
            });
          });
          inquirer
            .prompt([
              {
                // expects issue number as response
                type: "string",
                message:
                  "Would you be using emojis in your commit messages?(y/n)",
                name: "emojis",
              },
            ])
            .then((ans2) => {
              var emo = true;
              if (ans2["emojis"] === "y") {
                console.log(
                  "\nWe have an awesome set of emojis in the .gitgo file which will be suggested to you in the commit messages.\n"
                );
              } else {
                emo = false;
              }
              reader.jsonReader("./.gitgo", (err, conf) => {
                if (err) {
                  console.log("Error reading file:", err);
                  return;
                }
                conf.use_emojis = emo;
                conf.commit_config = true;
                fs.writeFile(
                  "./.gitgo",
                  JSON.stringify(conf, null, 2),
                  (err) => {
                    if (err) console.log("Error writing file:", err);
                  }
                );
              });
              console.log(
                `\nSettings for your repo have been stored. Run ${chalk.yellow(
                  "gg start"
                )} before working on an issue to get the branch name and commit title automatically. If you would like to change any settings manually, please edit the .gitgo file.\n`
              );
            });
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't render in the current environment
        } else {
          // Something else went wrong
        }
      });
  },

  displaySuggestions: async () => {
    reader.jsonReader("./.gitgo", (err, conf) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }
      branch = conf["current_branch"];
      commitMsg = conf["current_commit_message"];
      suggestedBranch =
        "Suggested branch name(press enter to continue or type an alternate): " +
        chalk.green(branch) +
        "\n";
      suggestedCommitMsg =
        'Suggested commit message(press enter to continue or "e" to type an alternate): ' +
        chalk.green(commitMsg) +
        "\n";

      inquirer
        .prompt([
          {
            type: "string",
            message: suggestedBranch,
            name: "branch",
          },
        ])
        .then((answers) => {
          if (answers["branch"] != "") {
            conf.current_branch = answers["branch"];
          }
          inquirer
            .prompt([
              {
                type: "string",
                message: suggestedCommitMsg,
                name: "commit",
              },
            ])
            .then((ans) => {
              if (ans["commit"] === "e") {
                inquirer
                  .prompt([
                    {
                      type: "editor",
                      message: commitMsg + "\n",
                      name: "commitCustom",
                    },
                  ])
                  .then((ans2) => {
                    console.log(ans2["commitCustom"]);
                    conf.current_commit_message = ans2.commitCustom;
                    fs.writeFile(
                      "./.gitgo",
                      JSON.stringify(conf, null, 2),
                      (err) => {
                        if (err) console.log("Error writing file:", err);
                      }
                    );
                  });
              }
              fs.writeFile("./.gitgo", JSON.stringify(conf, null, 2), (err) => {
                if (err) console.log("Error writing file:", err);
              });
            });
        })
        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't render in the current environment
          } else {
            // Something else went wrong
          }
        });
    });
  },
};
