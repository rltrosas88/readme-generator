// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is your project title? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide some information about the project. (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Will you be needing a table of content for your project?',
            default: true
        },
        {
            type: 'checkboxes',
            name: 'tableOfContent',
            message: 'What would you like in your table of contents? (check all that apply)',
            choices:    ['* [Description](#description)',
                        '* [Installation](#installation)', 
                        '* [Usage](#usage)', 
                        '* [Credits](#credits)', 
                        '* [License](#license)',
                        '* [Badges](#badges)',
                        '* [Features](#features)',
                        '* [Contributing](#contributing)',
                        '* [tests](#tests)'],
            when: ({confirmTable}) => confirmTable
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (required) Include screenshots as needed.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions and examples for use.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators with links to their GitHub profiles, if any. (required)',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter collaborators.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please provide a license for your project (required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter your license.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Will you be including Badges in your README?',
            default: true
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Please provide your badges.',
            when: ({confirmBadges}) => confirmBadges
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Will you be including project features in your README?',
            default: true
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please provide your project features.',
            when: ({confirmFeatures}) => confirmFeatures
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to credit an application or package?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide credit to an application or package.',
            when: ({confirmContributing}) => confirmContributing
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Will you be test for your application and how to run them?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide your tests.',
            when: ({confirmTests}) => confirmTests
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
