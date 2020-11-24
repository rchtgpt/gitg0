const reader = require('./jsonReader');
const cowsay = require('cowsay');

var retext = require('retext');
var pos = require('retext-pos');
var keywords = require('retext-keywords');
var toString = require('nlcst-to-string');
var branch_names = [];

function branchName() {
    reader.jsonReader('./.gitgo', (err, conf) => {
        if (err) {
            console.log(err)
            return
        }
        issue_title = conf.current_issue.title;
        retext()
            .use(pos)
            .use(keywords)
            .process(conf.current_issue.title, done)

        function done(err, file) {
            if (err) throw err;
            var keywords_list = []
            file.data.keywords.forEach(function (keyword) {
                keywords_list.push(toString(keyword.matches[0].node))
            })

            var key_phrases = []
            file.data.keyphrases.forEach(function (phrase) {
                key_phrases.push(phrase.matches[0].nodes.map(stringify).join(''));
                function stringify(value) {
                    return toString(value)
                };

                key_phrases.forEach(function (phrase) {
                    phrase = phrase.split(" ").join("-").toLowerCase();
                    branch_names.push(phrase);
                });
            })

            if (branch_names.length == 0) {
                keyword_bn = keywords_list.join("-");
                branch_names.push(keyword_bn);
            }

            for (var item = 0; item < branch_names.length; item++) {
                if (conf.existing_branches.includes(branch_names[item])) {
                    branch_names.pop(branch_names[item])
                }
            }
            if (branch_names.length === 0) {
                console.log(cowsay.say({
                    text: "Couldn't figure out a branch name for you :(",
                    T: 'U '
                }
                ))
            } else {
                console.log("Suggested branch name")
                console.log(branch_names);
            }
        }
    });
}

branchName();
