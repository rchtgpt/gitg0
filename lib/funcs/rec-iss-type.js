var inquirer = require('inquirer');
const emoji = require('node-emoji');
const issue = require('../issue');
const reader = require('./jsonReader');


    recIssueType = () => {
        reader.jsonReader('../../.gitgo', (err,conf) => {
            if (err) {
                console.log(err)
                return
            }

            var issue_labels = conf.current_issue.labels;
            console.log(issue_labels)
        })
    }


recIssueType()