const emoji = require('node-emoji');
const fs = require('fs');
const reader = require('./jsonReader');

stopwords = ['a', 'the'];

module.exports = {
    suggestCommitMsg:() => {
        setTimeout(()=>{reader.jsonReader('./.gitgo', (err, conf) => {
            if (err) {
                console.log(err)
                return
            }

            var issue_labels = conf.current_issue.labels;
            var issue_title = conf.current_issue.title;
            var issue_number = conf.current_issue.number;
            var commitGuidelines = conf.commit_guidelines;
            var customBoolean = conf.custom_guidelines;
            var commitTypeContent = String(conf.selected_commit_type.match(/([A-Za-z\s\-]+)\w+/g)).trim();
            var commitTypeEmoji;
            var emojiBool = conf.use_emojis;
            var commitGuideNum;
            var commitMsg;
            var prefix;

            switch(commitTypeContent)
            {
                case 'Initial commit':
                    {
                        commitTypeEmoji = conf.emojis.initial_commit;
                    }
                    break;
                case 'Adding a new user-facing feature':
                    {
                        commitTypeEmoji = conf.emojis.feature;
                        prefix = 'feat';
                    }
                    break;
                case 'Improving UI':
                    {
                        commitTypeEmoji = conf.emojis.ui;
                        prefix = 'feat';
                    }
                    break;
                case 'Refactoring or improving code':
                    {
                        commitTypeEmoji = conf.emojis.code_quality;
                        prefix = 'chore';
                    }
                    break;
                case 'Improving performance':
                    {
                        commitTypeEmoji = conf.emojis.performance;
                        prefix = 'chore';
                    }
                    break;
                case 'Improving security':
                    {
                        commitTypeEmoji = conf.emojis.security;
                        prefix = 'chore';
                    }
                    break;
                case 'Updating configs':
                    {
                        commitTypeEmoji = conf.emojis.config;
                        prefix = 'chore';
                    }
                    break;
                case 'Improving accessibility':
                    {
                        commitTypeEmoji = conf.emojis.accessibility;
                        prefix = 'chore';
                    }
                    break;
                case 'Improving dev tools':
                    {
                        commitTypeEmoji = conf.emojis.dev_tools;
                        prefix = 'feat';
                    }
                    break;
                case 'Writing docs':
                    {
                        commitTypeEmoji = conf.emojis.docs;
                        prefix = 'chore';
                    }
                    break;
                case 'New release':
                    {
                        commitTypeEmoji = conf.emojis.release;
                        prefix = 'chore';
                    }
                    break;
                case 'Fixing a bug':
                    {
                        commitTypeEmoji = conf.emojis.bug_fix;
                        prefix = 'fix';
                    }
                    break;
                case 'Fixing a crash':
                    {
                        commitTypeEmoji = conf.emojis.crash;
                        prefix = 'fix';
                    }
                    break;
                case 'Removing code/files':
                    {
                        commitTypeEmoji = conf.emojis.cleanup;
                        prefix = 'chore';
                    }
                    break;
                case 'WIP':
                    {
                        commitTypeEmoji = conf.emojis.wip;
                        prefix = 'chore';
                    }
                    break;
                // default:
                // {
                //     commitTypeEmoji = conf.emojis.feature;
                // }

            }
            commitTypeEmoji =  emoji.get(':'+commitTypeEmoji+':');

            switch(commitGuidelines[0])
            {
                case `fix:`:
                    commitGuideNum = 1;
                break;
                case `fix #`:
                    commitGuideNum = 2;
                break;
                case `...(fix #)`:
                    commitGuideNum = 3;
                    break;
                default: commitGuideNum = 4;
            }

            if (customBoolean == false)
            {
                switch(commitGuideNum)
                {
                    case 1:
                        {
                            if (emojiBool == true)
                            {
                                commitMsg = `${commitTypeEmoji} ${prefix}: ${issue_title}`;
                                conf.current_commit_message = commitMsg;
                            }
                            else
                            {
                                commitMsg = `${prefix}: ${issue_title}`;
                                conf.current_commit_message = commitMsg;
                            }

                        }
                        break;

                    case 2:
                        {
                            if (emojiBool == true)
                            {
                                commitMsg = `${commitTypeEmoji} fix #${issue_number}`;
                                conf.current_commit_message = commitMsg;
                            }
                            else
                            {
                                commitMsg = `fix #${issue_number}`;
                                conf.current_commit_message = commitMsg;
                            }
                        }
                        break;
                    case 3:
                        {
                            if (emojiBool == true)
                            {
                                commitMsg = `${commitTypeEmoji} ${issue_title} fix #${issue_number}`;
                                conf.current_commit_message = commitMsg;
                            }
                            else
                            {
                                commitMsg = `${issue_title} fix #${issue_number}`;
                                conf.current_commit_message = commitMsg;
                            }
                        }
                }
            }
            else
            {
                prefix = issue_labels.length>0? issue_labels[0]+":": '';
                if (emojiBool == true)
                    {
                        commitMsg = `${commitTypeEmoji} ${prefix} ${issue_title}`;
                        conf.current_commit_message = commitMsg;
                    }
                    else
                    {
                        commitMsg = `${prefix} ${issue_title}`;
                        conf.current_commit_message = commitMsg;
                    }

            }
            fs.writeFile('./.gitgo', JSON.stringify(conf, null, 2), (err) => {
                if (err) console.log('Error writing file:', err)
            })
        });},6000)
    }
}
