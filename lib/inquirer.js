var inquirer = require('inquirer');
var emoji = require('node-emoji')
const { getIssue } = require('./issue.js');
const fs = require('fs');

/*
Sample Usage

1. Reading content
jsonReader('./.gitgo', (err, conf) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(conf)
});

2. Updating conent
jsonReader('./.gitgo', (err, conf) => {
    if (err) {
        console.log('Error reading file:',err)
        return
    }
    conf.commit_guidelines[0] = "somethingelse:"
    conf.emojis.config = "thought_balloon"
    fs.writeFile('./.gitgo', JSON.stringify(conf), (err) => {
            if (err) console.log('Error writing file:', err)
    })
})
*/
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

module.exports = {
    
    getQuestions: async () => {

        inquirer.prompt([
            {
                // expects issue number as response
                type: 'string', message: 'Which issue are you working on today?', name: 'issue'
            }
        ])
            .then(answers => {
                const _issueNumber = answers['issue'];
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
                }]).then(
                    ans => {
                        // passes issue number to the function which fetches the issue title
                        getIssue(_issueNumber)
                    }
                )
            })
            .catch(error => {
                if (error.isTtyError) {
                    // Prompt couldn't render in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
};
