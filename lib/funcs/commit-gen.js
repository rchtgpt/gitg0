const emoji = require("node-emoji");
const fs = require("fs");
const reader = require("./jsonReader");
const { Console } = require("console");

stopwords = ["a", "the"];

const suggestCommitMsgCb = (conf) => {
  const issue_labels = conf.current_issue.labels;
  const issue_title = conf.current_issue.title;
  const issue_number = conf.current_issue.number;
  const commitGuidelines = conf.commit_guidelines;
  const customBoolean = conf.custom_guidelines;
  const commitTypeContent = conf.selected_commit_type
    .match(/([A-Za-z\s\-]+)\w+/g)
    .join()
    .trim();
  const emojiBool = conf.use_emojis;
  var commitTypeEmoji;
  var commitGuideNum;
  var commitMsg;
  var commitPrefix;

  const messageBlock = {
    "Initial commit": {
      emoji: conf.emojis.initial_commit,
      prefix: "",
    },
    "Adding a new user-facing feature": {
      emoji: conf.emojis.feature,
      prefix: "feat",
    },
    "Improving UI": {
      emoji: conf.emojis.ui,
      prefix: "feat",
    },
    "Refactoring or improving code": {
      emoji: conf.emojis.code_quality,
      prefix: "chore",
    },
    "Improving performance": {
      emoji: conf.emojis.security,
      prefix: "chore",
    },
    "Updating configs": {
      emoji: conf.emojis.config,
      prefix: "chore",
    },
    "Improving accessibility": {
      emoji: conf.emojis.accessibility,
      prefix: "chore",
    },
    "Improving dev tools": {
      emoji: conf.emojis.dev_tools,
      prefix: "feat",
    },
    "Writing docs": {
      emoji: conf.emojis.docs,
      prefix: "chore",
    },
    "New release": {
      emoji: conf.emojis.release,
      prefix: "chore",
    },
    "Fixing a bug": {
      emoji: conf.emojis.bug_fix,
      prefix: "fix",
    },
    "Fixing a crash": {
      emoji: conf.emojis.crash,
      prefix: "fix",
    },
    "Removing code/files": {
      emoji: conf.emojis.cleanup,
      prefix: "chore",
    },
    WIP: {
      emoji: conf.emojis.wip,
      prefix: "chore",
    },
  };

  var details = messageBlock[commitTypeContent];
  commitPrefix = details.prefix;
  commitTypeEmoji = emoji.get(":" + details.emoji + ":");

  switch (commitGuidelines[0]) {
    case `fix:`:
      commitGuideNum = 1;
      break;
    case `fix #`:
      commitGuideNum = 2;
      break;
    case `...(fix #)`:
      commitGuideNum = 3;
      break;
    default:
      commitGuideNum = 4;
  }

  if (customBoolean == false) {
    switch (commitGuideNum) {
      case 1:
        {
          if (emojiBool == true) {
            commitMsg = `${commitTypeEmoji} ${commitPrefix}: ${issue_title}`;
            conf.current_commit_message = commitMsg;
          } else {
            commitMsg = `${commitPrefix}: ${issue_title}`;
            conf.current_commit_message = commitMsg;
          }
        }
        break;

      case 2:
        {
          if (emojiBool == true) {
            commitMsg = `${commitTypeEmoji} fix #${issue_number} ${issue_title}`;
            conf.current_commit_message = commitMsg;
          } else {
            commitMsg = `fix #${issue_number} ${issue_title}`;
            conf.current_commit_message = commitMsg;
          }
        }
        break;
      case 3: {
        if (emojiBool == true) {
          commitMsg = `${commitTypeEmoji} ${issue_title} fix #${issue_number}`;
          conf.current_commit_message = commitMsg;
        } else {
          commitMsg = `${issue_title} fix #${issue_number}`;
          conf.current_commit_message = commitMsg;
        }
      }
    }
  } else {
    var customPrefix = issue_labels.length > 0 ? issue_labels[0] + ":" : "";
    if (emojiBool == true) {
      commitMsg = `${commitTypeEmoji} ${customPrefix} ${issue_title}`;
      conf.current_commit_message = commitMsg;
    } else {
      commitMsg = `${customPrefix} ${issue_title}`;
      conf.current_commit_message = commitMsg;
    }
  }
  fs.writeFile("./.gitgo", JSON.stringify(conf, null, 2), (err) => {
    if (err) console.log("Error writing file:", err);
  });

  return commitMsg;
};

module.exports = {
  suggestCommitMsg: () => {
    setTimeout(() => {
      reader.jsonReader("./.gitgo", (err, conf) => {
        if (err) {
          console.log(err);
          return;
        }
        const retVal = suggestCommitMsgCb(conf);
      });
    }, 4000);
  },
  suggestCommitMsgCb,
};
