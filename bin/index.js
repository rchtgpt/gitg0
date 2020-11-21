#!/usr/bin/env node

const clear = require('clear');
const figlet = require('figlet');
const cowsay = require('cowsay');
const files = require('../lib/files.js');
const program = require('commander');
const { getQuestions, getConfigQuestions } = require('../lib/inquirer.js');

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

program.parse(process.argv);
