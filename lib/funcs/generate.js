var issue_title;
var issue_labels = [];
const reader = require('./jsonReader');
const { createSentence } = require('sentence-engine');

var retext = require('retext');
var pos = require('retext-pos');
var keywords = require('retext-keywords');
var toString = require('nlcst-to-string');
var emoji = require('node-emoji');
var branch_names = [];

stopwords = ['a', 'the'];

function branchName() {
    reader.jsonReader('../../.gitgo', (err, conf) => {
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
            if (err) throw err

            var keywords_list = []
            file.data.keywords.forEach(function (keyword) {
                keywords_list.push(toString(keyword.matches[0].node))
            })

            console.log()
            var key_phrases = []
            file.data.keyphrases.forEach(function (phrase) {
                key_phrases.push(phrase.matches[0].nodes.map(stringify).join(''));
                function stringify(value) {
                    return toString(value)
                }

                key_phrases.forEach(function (phrase) {
                    phrase = phrase.split(" ").join("-").toLowerCase();
                    branch_names.push(phrase);
                })

                if (branch_names.length == 0) {
                    keyword_bn = keywords_list.join("-");
                    branch_names.push(keyword_bn);
                }
                console.log("Suggested branch name")
                console.log(branch_names);

            })
        }
    });

}

function suggestCommitMsg() {
    reader.jsonReader('../../.gitgo', (err, conf) => {
        if (err) {
            console.log(err)
            return
        }

        issue_labels = conf.current_issue.labels;
        issue_title = conf.current_issue.title;
        issue_title = remove_stopwords(issue_title);
        const commitTemplate = '{emoticon} {label}: {commitMsg}';
        const vocabulary = {
            emoticon: [`${emoji.get(':tada:')}`, `${emoji.get(':rocket:')}`, `${emoji.get(':sparkles:')}`],
            label: issue_labels,
            commitMsg: [issue_title]
        };
        const anInstanceOfTheSentenceClass = createSentence(commitTemplate, vocabulary, { capitalize: true });
        console.log("Suggested commit message")
        console.log(anInstanceOfTheSentenceClass.value);
    });
};

function remove_stopwords(str) {
    res = []
    words = str.split(' ')
    for (i = 0; i < words.length; i++) {
        word_clean = words[i].split(".").join("")
        if (!stopwords.includes(word_clean)) {
            res.push(word_clean)
        }
    }
    return (res.join(' '))
}
