const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }

  return `##License
  
  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

  ${license}`
}

// Function to create ToC based on selection
function generateToC(data) {
 /*  if (data.toc == true) { */
  if (data.license == "None") {
    return `## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)`;
  } else {
    return `## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)`;
  }
/* } else {
  return;
} */
}

// Function to add contributors as a list 
function contributions(data) {
  const collaborators = data.credits.split(',').map(collaborator => collaborator.trim());

  console.log(collaborators);

  if (!collaborators) {
    return ``;
  }

  let contributorsList = '';

  for (let i = 0; i < collaborators.length; i++) {
    
    contributorsList += `- ${collaborators[i]}\n`;
  
  }

  return contributorsList;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const template = fs.redFileSync('./TEMP.md', 'utf8');
  
  return `# ${data.title}

  ## Description

  ${data.description}

  ${generateToC(data)}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

      \`\`\`md
      ![${data.title}](${data.screenshot})
      \`\`\`

  ## Contributing

  ${contributions(data)}

  ${renderLicenseSection(data.license)}

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

  ## Tests

  ${data.testing}

  ##Questions

  Created by [${data.userName}](http://github.com/${data.userName})

  If you have questions on this application, you may contact me at ${data.userEmail}

`;
}

module.exports = generateMarkdown;
