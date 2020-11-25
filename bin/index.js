#!/usr/bin/env node

const clear = require('clear');
const figlet = require('figlet');
const cowsay = require('cowsay');
const files = require('../lib/files.js');
const program = require('commander');
const { getQuestions, getConfigQuestions, displaySuggestions } = require('../lib/inquirer.js');
const simpleGit = require('simple-git');
const git = simpleGit();
const { jsonReader } = require('../lib/funcs/jsonReader.js');

clear();

program
.command('start') 
.alias('s')
.action(function () {
    // displays Gitg0 on start
    if (files.directoryExists('.git')) {
        console.log(figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }), '\n');
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
});

program
.command('config') 
.alias('c')
.action(function () {
    // displays Gitg0 on start
    if (files.directoryExists('.git')) {
        console.log(figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }), '\n');
        // asks task based questions
        getConfigQuestions();
    } else {
        // checks if the directory is a git based repo or not
        console.log(cowsay.say({
            text: 'Not a git repository!',
            T: 'U '
        }
        ));
        process.exit();
    }
});

program
.command('display') 
.alias('d')
.action(function () {
    // displays Gitg0 on start
    if (files.directoryExists('.git')) {
        console.log(figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }), '\n');
        // asks task based questions
        displaySuggestions();
    } else {
        // checks if the directory is a git based repo or not
        console.log(cowsay.say({
            text: 'Not a git repository!',
            T: 'U '
        }
        ));
        process.exit();
    }
});

program
.command('checkout') 
.alias('cout')
.action(function () {
    // displays Gitg0 on start
    if (files.directoryExists('.git')) {
        console.log(figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }), '\n');
        jsonReader('./.gitgo', (err, conf) => {
            if (err) {
                console.log('Error reading file:', err)
                return
            }
            bName = conf.current_branch;
            git.checkoutLocalBranch(bName);
            console.log("Checked out to nee branch: " + bName);
        });
    } else {
        // checks if the directory is a git based repo or not
        console.log(cowsay.say({
            text: 'Not a git repository!',
            T: 'U '
        }
        ));
        process.exit();
    }
});

program
.command('commit') 
.alias('cmt')
.action(function () {
    // displays Gitg0 on start
    if (files.directoryExists('.git')) {
        console.log(figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }), '\n');
        jsonReader('./.gitgo', (err, conf) => {
            if (err) {
                console.log('Error reading file:', err)
                return
            }
            cMsg = conf.current_commit_message;
            git.commit(cMsg);
            console.log("Files have be commited: " + cMsg);
        });
    } else {
        // checks if the directory is a git based repo or not
        console.log(cowsay.say({
            text: 'Not a git repository!',
            T: 'U '
        }
        ));
        process.exit();
    }
});

program.parse(process.argv);
