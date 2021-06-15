// TODO: Include packages needed for this application

const fs = require('fs');
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
            choices:    ['* [Description](#description)',
                        '* [Installation](#installation)', 
                        '* [Usage](#usage)', 
                        '* [Credits](#credits)', 
                        '* [License](#license)',
                        '* [Badges](#badges)',
                        '* [Features](#features)',
                        '* [Contributing](#contributing)',
                        '* [tests](#tests)'],
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

questions().then(answers => console.log(answers));
// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //if ther's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the ',then()' method
            resolve({
                ok: true,
                message: 'Your README.md file has been generated'
            });
        });
    });
};

const writeFileAsync = util.promisify(writeFile);

// TODO: Create a function to initialize app
//await can only be used inside an async function
async function init() {
    try {
        //wait until the Promise is settled
        const userResponses = await inquirer.prompt(questions);

        //pass inquirer userResponses to generateMarkdown
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        //write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);
    }catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
