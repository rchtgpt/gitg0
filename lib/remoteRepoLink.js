const gitRemoteOriginUrl = require('git-remote-origin-url');
const inquirer = require('inquirer');

module.exports = {
    async getCurrentDirectoryGitRemoteUrl() {
        console.log("\n-----------------------------")
        console.log("\nYour remote repo link:", (await gitRemoteOriginUrl()));
    }
}
