const axios = require('axios');
const gitRemoteOriginUrl = require('git-remote-origin-url');
var emoji = require('node-emoji');
const chalk = require('chalk');

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
                        const finalIssueNumber = issueNumber.replace('#', '')
                        finalIssueLink = issueLink.
                            replace('{/number}', `/${finalIssueNumber}`)
                        axios.get(finalIssueLink)
                            .then(function (res) {
                                console.log(emoji.get(':smiley_cat:'), chalk.bold('Github Issue Title:'), res.data['title'])
                                process.exit()
                            })
                    }
                };
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}
