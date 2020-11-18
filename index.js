const clear = require('clear');
const figlet = require('figlet');
const cowsay = require('cowsay');
const files = require('./lib/files.js');
const { getQuestions } = require('./lib/inquirer.js');

clear();

// displays Gitgo on start
if (files.directoryExists('.git')) {
    console.log(figlet.textSync('Gitgo', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
    }), '\n');
    // asks task based questions
    getQuestions();
} else {
    // checks if the directory is a git based repo or not
    console.log(cowsay.say({
        text: 'Not a git repository!',
        T: 'U '
    }
    ));
    process.exit();
}
