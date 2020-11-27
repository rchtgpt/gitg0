const reader = require("../lib/funcs/jsonReader");
const {suggestBranchNmCb} = require('../lib/funcs/generate')

test('Suggests Commit Message Callback', () => {
    reader.jsonReader('../.gitgo', (err, conf) => {
        if (err) {
          return
        }
        expect(suggestBranchNmCb(conf).not.toBe(undefined))
      })
})