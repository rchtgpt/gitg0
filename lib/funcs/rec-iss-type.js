var inquirer = require('inquirer');
const emoji = require('node-emoji');
const fs = require('fs');
const reader = require('./jsonReader');

module.exports = {
    recIssueType : () => {
        reader.jsonReader('./.gitgo', (err, conf) => {
            if (err) {
                console.log(err)
                return
            }

            var issue_labels_raw = conf.current_issue.labels;
            if(issue_labels_raw.length > 1){
                console.log('inside if');
                var element = issue_labels_raw[issue_labels_raw.length - 1];
                    while(issue_labels_raw.length > 1){
                        console.log('inside while loop',issue_labels_raw);
                            if (element == 'bug' ||
                                element == 'enhancement' ||
                                element == 'help wanted' ||
                                    element == 'question' ||
                                    element == 'invalid' ||
                                        element == 'duplicate' ||
                                        element == 'good first issue' ||
                                            element == 'documentation' ||
                                            element == 'wontfix' ){
                                                    var issue_labels = [element];
                                                    console.log('before break',issue_labels);
                                                    break;
                                            }
                            else{
                                    issue_labels_raw.pop(element);
                                    console.log('after popping',issue_labels_raw);
                                    element = issue_labels_raw[issue_labels_raw.length - 1];
                            }
                    }
                    if (issue_labels_raw.length == 1){
                        var issue_labels = issue_labels_raw;
                        console.log('inside last if',issue_labels);
                    }
            }
            else{
                    var issue_labels = issue_labels_raw;
                    console.log('inside else',issue_labels);
            }

            for (let i = 0; i < issue_labels.length; i++) {
                if (issue_labels[i] === 'enhancement') {
                    inquirer.prompt([{
                        // displays emoji based MCQ
                        type: 'list',
                        message: 'What is the type of issue?',
                        name: 'issueType',
                        choices: [
                            `${emoji.get(':art:')} Improving UI`,
                            `${emoji.get(':sparkles:')} Adding a new user-facing feature`,
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
                    return;
                }
                else if (issue_labels[i] !== 'bug' && issue_labels[i] !== 'enhancement' && issue_labels[i] !== 'help wanted' && issue_labels[i] !== 'question' && issue_labels[i] !== 'invalid' && issue_labels[i] !== 'duplicate' && issue_labels[i] !== 'good first issue' && issue_labels[i] !== 'documentation' && issue_labels[i] !== 'wontfix') {
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
                    .then(
                        (ans) => {
                            reader.jsonReader('./.gitgo', (err, conf) => {
                                if (err) {
                                    console.log('Error reading file:', err)
                                    return
                                }
                                conf.selected_commit_type = ans['issueType'];
                                fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                    if (err) console.log('Error writing file:', err)
                                })
                            });
                            // passes issue number to the function which fetches the issue title
                            // getIssue(_issueNumber)
                        }
                    )
                    return;
                }
            }
        })
    }
}

// recIssueType()