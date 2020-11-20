var issue_title;
var issue_labels = [];
const reader = require('./jsonReader');
const { createSentence } = require('sentence-engine');

var retext = require('retext');
var pos = require('retext-pos');
var keywords = require('retext-keywords');
var toString = require('nlcst-to-string');
var emoji = require('node-emoji');

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

            console.log('Keywords:')
            file.data.keywords.forEach(function (keyword) {
                console.log(toString(keyword.matches[0].node))
            })

            console.log()
            console.log('Key-phrases:')
            file.data.keyphrases.forEach(function (phrase) {
                console.log(phrase.matches[0].nodes.map(stringify).join('-'))
                function stringify(value) {
                    return toString(value)
                }
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


branchName();
suggestCommitMsg();
suggestCommitMsg();
suggestCommitMsg();






