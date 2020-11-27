const reader = require("../lib/funcs/jsonReader");
const { suggestCommitMsgCb } = require("../lib/funcs/commit-gen");

test("Suggests Commit Message Callback", () => {
  reader.jsonReader("../.gitgo", (err, conf) => {
    if (err) {
      return;
    }
    expect(suggestCommitMsgCb(conf).not.toBe(undefined));
  });
});
