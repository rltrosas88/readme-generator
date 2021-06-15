// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  let readme = 
    //Title and description
    `# ${userResponses.title}
    
    ## Description
    
    ${userResponses.description}`

  //Table of contents 
  let tableOfContents = `## Table of Contents`

  readme += tableOfContents;

  if (userResponses.installation !== '') {
    tableOfContents += `* [Installation](#installation)` 
  };

  tableOfContents += `* [Usage](#usage)`;

  tableOfContents += `* [Credits](#credits)`

  tableOfContents += `* [License](#license)`

  if (userResponses.badges != '') {
    tableOfContents += `* [Badges](#badges)`
  };

  if (userResponses.features != '') {
    tableOfContents += `* [Features](#features)`
  };

  if (userResponses.contributing != '') {
    tableOfContents += `* [Contributing](#contributing)`
  };

  if (userResponses.tests != '') {
    tableOfContents += `* [Tests](#tests)`
  };

  //if user chooses to put an Installation section
  if (userResponses.installation != '') {
    readme += `
      ## Installation
      
      *Steps required to install project:*
      
      ${userResponses.installation}`
  };

  //Usage and Credits section
  readme += `
    ## Usage
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}
    
    ## Credits
    
    *List of collaborators:*
    
    ${userResponses.credits}`

  //License section
  readme += `
  ## License
  
  ${userResponses.license}`

  //optional Badges section
  if (userResponses.badges != '') {
    `
    ## Badges
    
    ${userResponses.badges}`
  };

  //optional Features section
  if (userResponses.features != '') {
    `
    ## Features
    
    ${userResponses.features}`
  };

  //optional Contributing Section
  if (userResponses.contributing != '') {
    `
    ## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
  };

  //optional Tests Section
  if (userResponses.tests != '') {
    `
    ## Tests

    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
  };

  return readme;
};

module.exports = generateMarkdown;
