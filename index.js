const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const cowsay = require('cowsay');
const files = require('./lib/files.js');
const remoteUrl = require('./lib/remoteRepoLink.js');
const { getCurrentDirectoryGitRemoteUrl } = require('./lib/remoteRepoLink.js');

clear();

// prints tool name on start
if (files.directoryExists('.git')) {
    console.log(figlet.textSync('Gitgo', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
    }));
    getCurrentDirectoryGitRemoteUrl();
} else {
    console.log(cowsay.say({
        text: 'Not a git repository!',
        T: "U "
    }
    ));
    process.exit();
}
