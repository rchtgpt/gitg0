var inquirer = require('inquirer');
const emoji = require('node-emoji');
const reader = require('./jsonReader');

module.exports = {
    recIssueType: () => {
        reader.jsonReader('./.gitgo', (err, conf) => {
            if (err) {
                console.log(err)
                return
            }

            var issue_labels = conf.current_issue.labels;

            for (let i = 0; i < issue_labels.length; i++) {
                if (issue_labels[i] === 'enhancement') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                            `${emoji.get(':construction:')} WIP`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'bug') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'documentation') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'duplicate') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'good first issue') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'help wanted') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'invalid') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'question') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':construction:')} WIP`,
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i] === 'wontfix') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                            `${emoji.get(':construction:')} WIP`,
                        ]
                    }])
                    return;
                } else if (issue_labels[i]) {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':tada:')} Initial commit`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':package:')} Refactoring or improving code`,
                            `${emoji.get(':racehorse:')} Improving performance`,
                            `${emoji.get(':lock:')} Improving security`,
                            `${emoji.get(':wrench:')} Updating configs`,
                            `${emoji.get(':wheelchair:')} Improving accessibility`,
                            `${emoji.get(':rocket:')} Improving dev tools`,
                            `${emoji.get(':pencil:')} Writing docs`,
                            `${emoji.get(':gem:')} New release`,
                            `${emoji.get(':bug:')} Fixing a bug`,
                            `${emoji.get(':boom:')} Fixing a crash`,
                            `${emoji.get(':fire:')} Removing code/files`,
                            `${emoji.get(':construction:')} WIP`,
                        ]
                    }])
                    return;
                }
            }
        })
    }
}

// recIssueType()