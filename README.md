![Gitg0_socialify](https://socialify.git.ci/dotrachit/gitg0/image?description=1&descriptionEditable=A%20magnificent%20tool%20to%20auto-suggest%20everything%20you%20need%20before%20pushing%20a%20git%20commit.&font=Raleway&forks=1&issues=1&language=1&pattern=Signal&pulls=1&stargazers=1&theme=Dark)

## Gitg0 🚀

[![NPM](https://nodei.co/npm/gitg0.png)](https://npmjs.org/package/gitg0)

![NodeJS CI Tests](https://github.com/dotrachit/gitg0/workflows/Node.js%20CI/badge.svg)
![Synk](https://github.com/dotrachit/gitg0/workflows/Snyk/badge.svg)
![Prettier Linter](https://github.com/dotrachit/gitg0/workflows/Prettier%20Linter/badge.svg)

**Gitg0 generates commit titles (with relevant emojis) and branch names for you.** You have the ability to configure the format of the Sugggested Commit Titles and Branch Names, and change emojis according to your preference in the `.gitgo` file.

## Usage

Not to shout at you but **PLEASE HEAD OVER TO [USAGE.md](https://github.com/dotrachit/gitg0/blob/main/USAGE.md)**

## Installation

The tool is available as an NPM package over [here](https://www.npmjs.com/package/gitg0).

Before installing the package, [download and install Node.js](https://nodejs.org/en/download/).

Then, you can install it by simple running the following command:

```bash
npm i -g gitg0
```

## 🎮 Commands

Currently, we have the following 7 commands:

#### `gtg config`

Use this to set up your project's gitgo configuration. You will be asked certain questions regarding your commit and emoji preferences.

#### `gtg version`

Use this to check the version of your installed gitg0 package.

#### `gtg whoami`

Use this to get the list of commands along with their functions.

#### `gtg start`

Use this before you you start working on a new issue so that we can suggest the branch names and commit messages automatically.

#### `gtg display`

Use this to view the suggested branch name and commit title. You can also edit the suggested text based on your preference. This command should be run after `gtg start`.

#### `gtg checkout`

This is a replacement for `git checkout -b` and will simply checkout with gitgo's suggested branch name.

#### `gtg commit`

This is a replacement for `git commit -m` and will commit your files once added with gitgo's suggested commit message.

## Contributor guidelines

- Before contributing, go through the [Code of Conduct](https://github.com/dotrachit/gitg0/blob/main/CODE_OF_CONDUCT.md) and the [Contributor Guidelines](https://github.com/dotrachit/gitg0/blob/main/CONTRIBUTING.md).
- If you find any bugs in the application, or a feature you think would be nice to have, please open an [issue](https://github.com/dotrachit/gitg0/issues/new/choose).
- Continue reading the rest of the README to get the build instructions.
- For detailed information and screenshots of the project, please head over to the project [wiki](https://github.com/dotrachit/gitg0/wiki).

## Development setup

Before setting up the project, [download and install Node.js](https://nodejs.org/en/download/).

After cloning the project, you need to execute the following commands to install and work on the project locally:

```bash
# This will install all the needed dependencies
npm install

# This will install the project from source locally in your system
npm install -g ./
```

## License

This project is released under a free and open-source software license, GPL-3.0 License ([LICENSE](LICENSE). The documentation is also released under a free documentation license, namely the [GFDL v1.3](https://www.gnu.org/licenses/fdl-1.3.en.html) license or later.

## Contributions

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the GPL-3.0 License, shall be licensed as above, without any additional terms or conditions.

## Maintainers

- [Yash Khare](https://github.com/yashk2000)
- [Rachit Gupta](https://github.com/dotrachit)
- [Shambhavi Aggarwal](https://github.com/agg-shambhavi)
- [Preet Shah](https://github.com/shahpreetk)
