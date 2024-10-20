// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)v`
  } else if (license === "BSD 3-Clause License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "ISC License") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return ""
  }
}


/*

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(project) {
  return `
# ${project.title}

${renderLicenseBadge(project.license)}

## Description

${project.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${project.installation}

## Usage

${project.usage}

## License

See the project license here: [${project.license}](./LICENSE.txt)

## Contributing

${project.contributing}

## Tests

${project.tests}

## Questions

I am ${project.username} on GitHub. [Go to my GitHub profile](https://github.com/${project.username})

Or, email me at <${project.email}> if you have questions!
`
}

export default generateMarkdown;

/*
if user selects MIT,
-an MIT badge will show near the top of my README.md
-a link titled MIT will show in the License section
-a file will be created called LICENSE.md (fs.writeFile())
-LICENSE.md contains the default text for that license
*/