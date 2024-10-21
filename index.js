// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import { apacheLicense } from "./utils/license-options/apache.js";
import { bsdLicense } from "./utils/license-options/BSD.js";
import { gnuLicense } from "./utils/license-options/GNU.js";
import { iscLicense } from "./utils/license-options/ISC.js";
import { mitLicense } from "./utils/license-options/MIT.js";
import { mozillaLicense } from "./utils/license-options/Mozilla.js";

const currentYear = new Date().getFullYear();

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: colors.brightGreen("What is the title of your project?"),
        name: "title",
    },
    {
        type: "input",
        message: colors.brightGreen("What problem does this project solve? Write a few sentences describing your project."),
        name: "description",
    },
    {
        type: "input",
        message: colors.brightGreen("Provide step-by-step instructions for how to install your project."),
        name: "installation",
    },
    {
        type: "input",
        message: colors.brightGreen("Explain how your project is used. Give some examples."),
        name: "usage",
    },
    {
        type: "list",
        message: "Pick a license:",
        name: "license",
        choices: ["Apache License 2.0", "BSD 3-Clause License", "GNU GPLv3", "ISC License", "MIT", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        message: colors.brightGreen("How can others contribute to your project?"),
        name: "contributing"
    },
    {
        type: "input",
        message: colors.brightGreen("Write some tests for your application, and explain how to run them."),
        name: "tests"
    },
    {
        type: "input",
        message: colors.brightGreen("What is your GitHub username?"),
        name: "username"
    },
    {
        type: "input",
        message: colors.brightGreen("What is your email address?"),
        name: "email"
    }
];

function createLicenseFileTest(license, username) {
    switch (license) {
        case "Apache License 2.0":
            fs.writeFile(
                "./output/LICENSE.txt",
                apacheLicense(currentYear, username),
                (err) => err ? console.log(err) : console.log(colors.bgYellow("Created new Apache License 2.0 LICENSE file."))
            );
            break;
        case "BSD 3-Clause License":
            fs.writeFile(
                "./output/LICENSE.txt", 
                bsdLicense(currentYear, username),
                (err) => err ? console.log(err) : console.log(colors.bgBrightRed('Created new BSD 3-Clause License LICENSE file.'))
            );
            break;
        case "GNU GPLv3":
            fs.writeFile(
                "./output/LICENSE.txt", 
                gnuLicense(currentYear, username),
                (err) => err ? console.log(err) : console.log(colors.bgBlue('Created new GNU General Public License (version 3) LICENSE file.'))
            );
            break;
        case "ISC License":
            fs.writeFile(
                "./output/LICENSE.txt", 
                iscLicense(currentYear, username),
                (err) => err ? console.log(err) : console.log(colors.bgBrightBlue('Created new ISC License LICENSE file.'))
            );
            break;
        case "MIT":
            fs.writeFile(
                "./output/LICENSE.txt", 
                mitLicense(currentYear, username),
                (err) => err ? console.log(err) : console.log(colors.bgBrightYellow('Created new MIT LICENSE file.'))
            );
            break;
        case "Mozilla Public License 2.0":
            fs.writeFile(
                "./output/LICENSE.txt", 
                mozillaLicense(),
                (err) => err ? console.log(err) : console.log(colors.bgBrightGreen('Created new Mozilla Public License 2.0 LICENSE file.'))
            );
            break;
        default:
            console.log(colors.gray("No license file created."));
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName, 
        generateMarkdown(data), 
        (err) => err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((project) => {
        writeToFile("./output/SAMPLE.md", project);
        createLicenseFileTest(project.license, project.username);
    })
}

// Function call to initialize app
init();

