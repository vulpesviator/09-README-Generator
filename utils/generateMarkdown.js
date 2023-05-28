const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const template = fs.redFileSync('./TEMP.md', 'utf8');
  
  return `# ${data.title}

          ## Description

          ${data.description}

          ## Table of Contents 
          
          - [Installation](#installation)
          - [Usage](#usage)
          - [Credits](#credits)
          - [License](#license)

          ## Installation

          ${data.install}

          ## Usage

          ${data.usage}

          To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

              \`\`\`md
              ![alt text](assets/images/screenshot.png)
              \`\`\`

          ## Credits

          ${data.credits}

          ## License

          [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

          ${data.license}

          ## Badges

          ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

          Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

          ## Tests

          ${data.testing}

          ##Contact

          Created by [${data.userName}](http://github.com/${data.userName})

          ${data.userEmail}

`;
}

module.exports = generateMarkdown;
