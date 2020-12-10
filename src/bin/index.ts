const clear = require("clear");
const cowsay = require("cowsay");
const files = require("../lib/files.js");
const program = require("commander");
const { getQuestions, getConfigQuestions, displaySuggestions } = require("../lib/inquirer.js");
import logLogo from "../lib/funcs/logLogo";
const git = require("simple-git")();
const { jsonReader } = require("../lib/funcs/jsonReader.js");
const version = require("../../package.json");
const chalk = require("chalk");
const { exec } = require("child_process");
const fs = require("fs");
import { GitGoConf } from "../types";

clear();

program
  .command("start")
  .alias("s")
  .action(() => {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      logLogo();
      getQuestions();
    } else {
      // checks if the directory is a git based repo or not
      console.log(
        cowsay.say({
          text: "Not a git repository!",
          T: "U ",
        })
      );
      process.exit();
    }
  });

program
  .command("config")
  .alias("c")
  .action(async () => {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      try {
        logLogo();
        await fs.stat("./.gitgo");
        getConfigQuestions();
      } catch (err) {
        if (err.code === "ENOENT") {
          // file does not exist
          var conf = {
            current_issue: {
              number: "",
              labels: [""],
              title: "",
            },
            commit_guidelines: [""],
            custom_guidelines: false,
            selected_commit_type: "",
            emojis: {
              initial_commit: "tada",
              feature: "sparkles",
              ui: "art",
              code_quality: "package",
              performance: "racehorse",
              security: "lock",
              config: "wrench",
              accessibility: "wheelchair",
              dev_tools: "rocket",
              docs: "pencil",
              release: "gem",
              bug_fix: "bug",
              crash: "boom",
              cleanup: "fire",
              wip: "construction",
            },
            existing_branches: [],
            current_branch: [""],
            current_commit_message: "",
            use_emojis: false,
            commit_config: false,
          };
          try {
            await fs.writeFile("./.gitgo", JSON.stringify(conf, null, 2));
            getConfigQuestions();
          } catch (e) {
            console.log("Error writing file: ", e);
          }
        } else {
          console.log("Some other error: ", err.code);
        }
      }
    } else {
      console.log(
        cowsay.say({
          text: "Not a git repository!",
          T: "U ",
        })
      );
      process.exit();
    }
  });

program
  .command("display")
  .alias("d")
  .action(() => {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      logLogo();
      // asks task based questions
      displaySuggestions();
    } else {
      // checks if the directory is a git based repo or not
      console.log(
        cowsay.say({
          text: "Not a git repository!",
          T: "U ",
        })
      );
      process.exit();
    }
  });

program
  .command("checkout")
  .alias("cout")
  .action(function() {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      logLogo();
      jsonReader("./.gitgo", (err: Error, conf: GitGoConf) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        const bName = conf.current_branch;
        git.checkoutLocalBranch(bName);
        console.log("Checked out to new branch: " + bName);
      });
    } else {
      // checks if the directory is a git based repo or not
      console.log(
        cowsay.say({
          text: "Not a git repository!",
          T: "U ",
        })
      );
      process.exit();
    }
  });

program
  .command("commit")
  .alias("cmt")
  .action(function() {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      logLogo();
      jsonReader("./.gitgo", (err: Error, conf: GitGoConf) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        const cMsg = conf.current_commit_message;
        if (conf.commit_config) {
          conf.commit_config = false;
          conf.current_commit_message = "";
          conf.current_branch = "";
          conf.existing_branches = [""];
          conf.selected_commit_type = "";
          conf.current_issue = {
            number: undefined,
            labels: [""],
            title: "",
          };
          fs.writeFile("./.gitgo", JSON.stringify(conf, null, 2), (err: Error) => {
            if (err) console.log("Error writing file:", err);
          });
          setTimeout(function() {
            exec("git add ./.gitgo", (error: Error, stdout: any, stderr: Error) => {
              if (error) {
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
              }
            });
            git.commit(cMsg);
            console.log("Files have be commited!\nRecent commit message: " + cMsg);
          }, 1000);
        } else {
          exec("git reset -- ./.gitgo", (error: Error, stdout: any, stderr: Error) => {
            if (error) {
              console.log(`error: ${error.message}`);
              return;
            }
            if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
            }
          });
          git.commit(cMsg);
          console.log("Files have be commited!\nRecent commit message: " + cMsg);
        }
      });
    } else {
      // checks if the directory is a git based repo or not
      console.log(
        cowsay.say({
          text: "Not a git repository!",
          T: "U ",
        })
      );
      process.exit();
    }
  });

program
  .command("version")
  .alias("v")
  .action(function() {
    // displays Gitg0 on start
    logLogo();
    console.log("v" + version.version + "-stable");
  });

program
  .command("whoami")
  .alias("w")
  .action(function() {
    // displays Gitg0 on start
    logLogo();
    console.log(
      `You just need to know 7 simple commands you and then you're ${chalk.bold.cyan(
        "gtg"
      )} : ${chalk.magenta("Good to Go")}`
    );
    console.log(chalk.green("\ngtg config:\n"));
    console.log(
      "Use this to set up your project's gitgo configuration. You will be asked certain questions regarding your commit and emoji preferences.\n"
    );
    console.log(chalk.green("\ngtg version:\n"));
    console.log("Use this to check the version of your installed gitg0 package.");
    console.log(chalk.green("\ngtg whoami:\n"));
    console.log("I mean,,, you just used me.");
    console.log(chalk.green("\ngtg start:\n"));
    console.log(
      "Use this before you you start working on a new issue so that we can suggest the branch names and commit messages automatically.\n"
    );
    console.log(chalk.green("\ngtg display:\n"));
    console.log(
      `Use this to view the suggested branch name and commit title. You can also edit the suggested text based on your preference. This command should be run after ${chalk.yellow(
        "gtg start"
      )}.\n`
    );
    console.log(chalk.green("\ngtg checkout:\n"));
    console.log(
      `This is a replacement for ${chalk.yellow(
        "git checkout -b"
      )} and will simply checkout with gitgo's suggested branch name.\n`
    );
    console.log(chalk.green("\ngtg checkout:\n"));
    console.log(
      `This is a replacement for ${chalk.yellow(
        "git checkout -m"
      )} and will commit your files once added with gitgo's suggested commit message.\n`
    );
  });

program.parse(process.argv);
