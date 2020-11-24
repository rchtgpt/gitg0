const axios = require('axios');
const gitRemoteOriginUrl = require('git-remote-origin-url');
const reader = require('./funcs/jsonReader')
var emoji = require('node-emoji');
const chalk = require('chalk');
var titleOfIssue;
let labelsOfIssue = [];
const fs = require('fs');
var finalIssueNumber;

module.exports = {
    getIssue: async (issueNumber) => {
        const remoteRepoLink = await gitRemoteOriginUrl();
        const usernameWithRepoName = remoteRepoLink.slice(19);
        let username = usernameWithRepoName.split('/');
        username = username[0];
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(async function (response) {
                for (repo in response.data) {
                    if (response.data[repo]['clone_url'] === (await gitRemoteOriginUrl())) {
                        var issueLink = response.data[repo]['issues_url'];
                        finalIssueNumber = issueNumber.replace('#', '')
                        finalIssueLink = issueLink.
                            replace('{/number}', `/${finalIssueNumber}`)
                        axios.get(finalIssueLink)
                            .then(function (res) {
                                titleOfIssue = res.data['title'];
                                (res.data['labels']).forEach(element => {
                                    labelsOfIssue.push(element['name']);
                                });
                                console.log(emoji.get(':smiley_cat:'), chalk.bold('Github Issue Title:'), titleOfIssue);
                                reader.jsonReader('./.gitgo', (err, conf) => {
                                    if (err) {
                                        console.log('Error reading file:', err)
                                        return
                                    }
                                    conf.current_issue.title = titleOfIssue;
                                    conf.current_issue.labels = labelsOfIssue;
                                    conf.current_issue.number = finalIssueNumber;
                                    fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                                        if (err) console.log('Error writing file:', err)
                                    })
                                })
                                setTimeout(function () {
                                    reader.jsonReader('./.gitgo', (err, conf) => {
                                        if (err) {
                                            console.log(err)
                                            return
                                        }
                                        // display current issue details
                                        console.log(conf.current_issue)
                                    });
                                }, 1000);
                            });
                    }
                };
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}
