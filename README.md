# README-Made-Easy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

With the README-Made-Easy application, developers can quickly create a new, formatted README. Accessed through the Command Line Interface, the application prompts users with a set of questions about their project. The user's answers are then output into a new markdown file called SAMPLE.md. If the user selects a license from a list of options, the appropriate LICENSE.txt file is also created, including a customized copyright line with the user's GitHub username and the current year.

Save time creating your README file with an interactive and intuitive CLI application — try out README-Made-Easy today!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application uses node.js. If you don't have it installed, you can download it here: [Node.js — Download Node.js](https://nodejs.org/en/download/package-manager)

Then, clone the repository to your local enviroment from the Command Line:
```git clone https://github.com/mikelind28/README-Made-Easy.git```

Make sure you cd into the newly-cloned README-Made-Easy directory, then install the required dependencies with Node Package Manager:
```cd README-Made-Easy```
```npm install```

Now you're ready to use README-Made-Easy!

## Usage

From within the README-Made-Easy directory, simply run ```node index.js``` in the Command Line. Then, answer each question that is prompted from within the CLI. That's it!

After all of the questions are answered, a new SAMPLE.md file is created, as well as a LICENSE.text if you've selected a license.

## Credits

REAME-Made-Easy uses the [inquirer.js](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/inquirer/README.md) and the [colors.js](https://github.com/Marak/colors.js) node packages. 

## License

This project is licensed under the [MIT License](./LICENSE).
