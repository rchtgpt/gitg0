#!/usr/bin/env node

const clear = require("clear");
const figlet = require("figlet");
const cowsay = require("cowsay");
const files = require("../lib/files.js");
const program = require("commander");
const {
  getQuestions,
  getConfigQuestions,
  displaySuggestions,
} = require("../lib/inquirer.js");
const simpleGit = require("simple-git");
const git = simpleGit();
const { jsonReader } = require("../lib/funcs/jsonReader.js");
const version = require("../package.json");
const chalk = require("chalk");

clear();

program
  .command("start")
  .alias("s")
  .action(function () {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      console.log(
        figlet.textSync("Gitg0", {
          horizontalLayout: "default",
          verticalLayout: "default",
        }),
        "\n"
      );
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
  .action(function () {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      console.log(
        figlet.textSync("Gitg0", {
          horizontalLayout: "default",
          verticalLayout: "default",
        }),
        "\n"
      );
      // asks task based questions
      getConfigQuestions();
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
  .command("display")
  .alias("d")
  .action(function () {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      console.log(
        figlet.textSync("Gitg0", {
          horizontalLayout: "default",
          verticalLayout: "default",
        }),
        "\n"
      );
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
  .action(function () {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      console.log(
        figlet.textSync("Gitg0", {
          horizontalLayout: "default",
          verticalLayout: "default",
        }),
        "\n"
      );
      jsonReader("./.gitgo", (err, conf) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        bName = conf.current_branch;
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
  .action(function () {
    // displays Gitg0 on start
    if (files.directoryExists(".git")) {
      console.log(
        figlet.textSync("Gitg0", {
          horizontalLayout: "default",
          verticalLayout: "default",
        }),
        "\n"
      );
      jsonReader("./.gitgo", (err, conf) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        cMsg = conf.current_commit_message;
        git.commit(cMsg);
        console.log("Files have be commited: " + cMsg);
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
  .action(function () {
    // displays Gitg0 on start
    console.log(
      figlet.textSync("Gitg0", {
        horizontalLayout: "default",
        verticalLayout: "default",
      }),
      "\n"
    );
    console.log("v" + version.version + "-stable");
  });

program
  .command("whoami")
  .alias("w")
  .action(function () {
    // displays Gitg0 on start
    console.log(
      figlet.textSync("Gitg0", {
        horizontalLayout: "default",
        verticalLayout: "default",
      }),
      "\n"
    );
    console.log(
      "You just need to know 5 simple commands you and then you're " +
        chalk.bold.cyan("gtg") +
        ": " +
        chalk.magenta("Good to Go")
    );
    console.log(chalk.green("\ngtg config:\n"));
    console.log(
      "This command should be used to personalise your gitgo configuration. You can add your repository's commit and emoticon guidelines.\n"
    );
    console.log(chalk.green("\ngtg start:\n"));
    console.log(
      "Everytime you start working on a new issue, just run this command in order for the tool to know which issue you're working on. After this, the tool will suggest the branch names and commit messages automatically.\n"
    );
    console.log(chalk.green("\ngtg display:\n"));
    console.log(
      "This command can be used to display the branch name and commit that the tool will be suggesting for a particular issue once gtg start has been run.\n"
    );
    console.log(chalk.green("\ngtg checkout:\n"));
    console.log(
      "This is a replacement for git checkout and will simply checkout with the suggested branch name.\n"
    );
    console.log(chalk.green("\ngtg checkout:\n"));
    console.log(
      "This is a replacement for git commit and will commit your files once added with the suggested commit message.\n"
    );
  });

program.parse(process.argv);
