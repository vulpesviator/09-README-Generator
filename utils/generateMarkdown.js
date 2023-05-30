const fs = require('fs');
const inquirer = require('inquirer');

// An array of license selections with their badges and links
const licensesFull = [
  {
    name: 'Apache 2.0 License',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    link: '(https://opensource.org/licenses/Apache-2.0)'
  },
  {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    link: '(https://www.boost.org/LICENSE_1_0.txt)'
  },
  {
    name: 'BSD 3-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    link: '(https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
    name: 'BSD 2-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]',
    link: '(https://opensource.org/licenses/BSD-2-Clause)'
  },
  {
    name: 'Creative Commons',
    badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]',
    link: '(http://creativecommons.org/publicdomain/zero/1.0/)'
  },
  {
    name: 'Creative Commons Attribution 4.0',
    badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by/4.0/)'
  },
  {
    name: 'Creative Commons Attribution-ShareAlike 4.0 International',
    badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by-sa/4.0/)'
  },
  {
    name: 'Creative Commons Attribution-NonCommercial 4.0 International',
    badge: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by-nc/4.0/)'
  },
  {
    name: 'Creative Commons Attribution-NoDerivates 4.0 International',
    badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by-nd/4.0/)'
  },
  {
    name: 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
    badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by-nc-sa/4.0/)'
  },
  {
    name: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
    badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)]',
    link: '(https://creativecommons.org/licenses/by-nc-nd/4.0/)'
  },
  {
    name: 'Eclipse Public License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]',
    link: '(https://opensource.org/licenses/EPL-1.0)'
  },
  {
    name: 'GNU GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/gpl-3.0)'
  },
  {
    name: 'GNU GPL v2',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]',
    link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  },
  {
    name: 'GNU AGPL v3',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/agpl-3.0)'
  },
  {
    name: 'GNU LGPL v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/lgpl-3.0)'
  },
  {
    name: 'GNU FDL v1.3',
    badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/fdl-1.3)'
  },
  {
    name: 'The Hippocratic License 2.1',
    badge: '![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]',
    link: '(https://firstdonoharm.dev)'
  },
  {
    name: 'The Hippocratic License 3.0',
    badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]',
    link: '(https://firstdonoharm.dev)'
  },
  {
    name: 'IBM Public License Version 1.0',
    badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    link: '(https://opensource.org/licenses/IPL-1.0)'
  },
  {
    name: 'ISC License (ISC)',
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    link: '(https://opensource.org/licenses/ISC)'
  },
  {
    name: 'The MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    link: '(https://opensource.org/licenses/MIT)'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    link: '(https://opensource.org/licenses/MPL-2.0)'
  },
  {
    name: 'Open Data Commons Attribution License (BY)',
    badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/by/)'
  },
  {
    name: 'Open Data Commons Open Database License (ODbL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/odbl/)'
  },
  {
    name: 'Open Data Commons Public Domain Dedication and License (PDDL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]',
    link: '(https://opendatacommons.org/licenses/pddl/)'
  },
  {
    name: 'The Perl License',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'The Artistic License 2.0',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'SIL Open Font License 1.1',
    badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]',
    link: '(https://opensource.org/licenses/OFL-1.1)'
  },
  {
    name: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
    link: '(http://unlicense.org/)'
  },
  {
    name: 'The Do What the Fuck You Want to Public License',
    badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]',
    link: '(http://www.wtfpl.net/about/)'
  },
  {
    name: 'The zlib/libpng License',
    badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]',
    link: '(https://opensource.org/licenses/Zlib)'
  },
]

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }

  let result = licensesFull.filter(licenseInfo => licenseInfo.name == license);
  return result[0].badge;

}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }

  let result = licensesFull.filter(licenseInfo => licenseInfo.name == license);
  return result[0].link;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }

  return `## License
  
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

  ${license}`
}

// Function to create Table of Contents based on selection
function generateToC(data) {
   if (!data.toc) {
    return;
  }

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
}

// Function to include deployed URL 
function appDeployed(data) {

  if (!data.deployed) {
    return ``;
  }

  return `
  The site is currently deployed for review on [github pages](${data.deployedURL})

  `
}

// Function to order usage instructions into a numbered list 
function appUsage(data) {
  const howToUse = data.usage.split('.').map(use => use.trim());

  console.log(howToUse);

  if (!howToUse) {
    return ``;
  }

  let useList = '';

  for (let i = 0; i < howToUse.length; i++) {
    
    useList += `${i + 1}. ${howToUse[i]}\n`;
  
  }

  return useList;
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

// Function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

## Description

${data.description}

${generateToC(data)}

## Installation

${data.install}

## Usage

${appDeployed(data)}

![${data.title}](${data.screenshot})

${appUsage(data)}

## Contributing

${contributions(data)}

${renderLicenseSection(data.license)}

## Tests

${data.testing}

## Questions

Created by [${data.userName}](http://github.com/${data.userName})

[Contact Me](${data.userEmail})

Copyright (c) [2023] [${data.fullName}]`;
}

module.exports = generateMarkdown;
