![gitg0](https://socialify.git.ci/dotrachit/gitg0/image?description=1&descriptionEditable=A%20magnificent%20tool%20to%20auto-suggest%20everything%20you%20need%20before%20pushing%20a%20git%20commit.&font=Raleway&forks=1&issues=1&language=1&pattern=Signal&pulls=1&stargazers=1&theme=Dark)

## 🚀 gitg0

gitg0 is a command line tool which makes lives of both project maintainers and contributors easy 😌. How does gitg0 do that❓

### For contributors and developers 👨‍💻

- Ever spent 2-3 minutes before working on thinking what to name your branch? ⸙
- After making the changes, spent time on wondering about an appropriate commit message? 🖋️
- After a long hectic day of working, skipped over the commit guidelines followed by your project? 😴 
- Felt like your commit message could be a bit better if it had an emoji? ✨

Well, gitg0 takes care of all this and much more!
You just need to enter the number of the issue you're working on, and select what kind of issue it is, whether a new feature, ui refactors, documentation, security fixes, etc. gitg0 will do the rest for you. The tool will automatically suggest a branch name, and a commit message as well along with an appropriate emoji if you want one!

Head over [here](https://github.com/dotrachit/gitg0/tree/readme#-usage) for instructions on how to use gitg0 🎁

### For maintainers 👩‍🔧

Tired of telling contributors to follow proper commit guidelines? 😫

Fear no more, gitg0 is here! With gitg0, you can setup a `.gitgo` file and choose exactly what commit guidelines your project follows. You want an emoji? We got you covered. You want to enter a custom set of guidelines? We provide an option for that as well. Just eenter the format in which you want your commits to be, and that is the format in which the commit message that will be shown to contributors when they want to make a commit. 

Head over [here](https://github.com/dotrachit/gitg0/tree/readme#-usage) for instructions on how to do the one time gitgo setup 🎁

## 👨‍🏭 Who are we?
This project was built by [Preet Shah](https://github.com/shahpreetk), [Shambhavi Aggarwal](https://github.com/agg-shambhavi), [Rachit Gupta](https://github.com/dotrachit) and [Yash Khare](https://github.com/yashk2000).

## 💻 What did we use?

gitg0 has been developed completely in javascript <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>.

## 🔨 Installation 

The tool is available as an npm package over [here](https://www.npmjs.com/package/gitg0).

Before installing the package, [download and install Node.js](https://nodejs.org/en/download/)<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>.
Then you can install it by simple running the following command:

```bash
npm i gitg0
```

## 🎮 Usage

Currently, we have the following 6 commands which will make you **Good To Go**, `gtg`: 

### `gtg whoami`

As the name suggests this command will help you know what the tool does and how to use the commands right from your terminal. 

### `gtg config`

This commands should be used on for the first time, while setting up the gitgo configuration. You will be asked a small set of questions regarding your commit and emoji preferences. If you would like to change these preferences sometime in future, you can run this command again to make the changes. 

### `gtg start`

Everytime you start working on a new issue, just run this command in order for the tool to know which issue you're working on. After this, the tool will suggest the branch names and commit messages automatically. 

### `gtg display`

This command can be used to display the branch name and commit that the tool will be suggesting for a particular issue once `gtg start` has been run.  

### `gtg checkout`

This is a replacement for `git checkout` and will simply checkout with the suggested branch name. 

### `gtg commit`

This is a replacement for `git commit` and will commit your files once added with the suggested commit message. 

## 👨‍💻 For contributors
- Before contributing do go through the [Code of Conduct](https://github.com/dotrachit/gitg0/blob/main/CODE_OF_CONDUCT.md) and the [Contributor Guidelines](https://github.com/dotrachit/gitg0/blob/main/CONTRIBUTING.md). 🔧
- If you find any bugs in the application, or a feature you think would be nice to have, please open an [issue](https://github.com/dotrachit/gitg0/issues/new/choose). 🐞
- Continue reading the rest of the README to get the build instructions. ⛏️
- For detailed information and screenshots of the project, please head over to the project [wiki](https://github.com/dotrachit/gitg0/wiki). 📚

## 🛠️ Setting up the project

Before setting up the project, [download and install Node.js](https://nodejs.org/en/download/)<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>.

After cloning the project, you need to execute the following commands to install and work on the project locally: 

```bash
# This will install alll the needed dependencies
npm install

# This will install the project from source locally in your system
npm install -g ./
```

## 📜 License
This project is released under a free and open-source software license, GPL-3.0 License ([LICENSE](LICENSE). The documentation is also released under a free documentation license, namely the [GFDL v1.3](https://www.gnu.org/licenses/fdl-1.3.en.html) license or later.

### 🖊️ Contributions
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the GPL-3.0 License, shall be licensed as above, without any additional terms or conditions.
