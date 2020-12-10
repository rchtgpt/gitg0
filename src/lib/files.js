const fs = require("fs");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    // gets the basename of the directory
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    // gets the whole directory list
    return fs.existsSync(filePath);
  },
};
