// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'appTitle',
    },
    {
        type: 'input',
        message: 'Please enter your project\'s description:',
        name: 'appDescription',
    },
    {
        type: 'input',
        message: 'Please enter your project\'s installation instructions:',
        name: 'appInstall',
    },
    {
        type: 'input',
        message: 'Please enter your project\'s usage information:',
        name: 'appUsage',
    },
    {
        type: 'input',
        message: 'Please enter your project\'s contribution guidelines:',
        name: 'appContributions',
    },
    {
        type: 'input',
        message: 'Please enter your project\'s testing instructions:',
        name: 'appTesting',
    },
    {
        type: 'list',
        message: 'Please seelct a license for you application:',
        choices: [
            "Apache 2.0 License", 
            "Boost Software License 1.0", 
            "BSD 3-Clause License", 
            "BSD 2-Clause License", 
            "Creative Commons", 
            "Creative Commons Attribution 4.0", 
            "Creative Commons Attribution-ShareAlike 4.0 International", 
            "Creative Commons Attribution-NonCommercial 4.0 International", 
            "Creative Commons Attribution-NoDerivates 4.0 International", 
            "Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International", 
            "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International", 
            "Eclipse Public License 1.0", 
            "GNU GPL v3", 
            "GNU GPL v2", 
            "GNU AGPL v3", 
            "GNU LGPL v3", 
            "GNU FDL v1.3", 
            "The Hippocratic License 2.1", 
            "The Hippocratic License 3.0", 
            "IBM Public License Version 1.0", 
            "ISC License (ISC)", 
            "The MIT License", 
            "Mozilla Public License 2.0", 
            "Open Data Commons Attribution License (BY)", 
            "Open Data Commons Open Database License (ODbL)", 
            "Open Data Commons Public Domain Dedication and License (PDDL)", 
            "The Perl License", 
            "The Artistic License 2.0", 
            "SIL Open Font License 1.1", 
            "The Unlicense", 
            "The Do What the Fuck You Want to Public License", 
            "The zlib/libpng License", 
            "None"],
        name: 'appLicense',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
    })
    .catch((err) => {
        console.error(err);
    });
}

// Function call to initialize app
init();
