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
function generateMarkdown(data) {
  let readme = 
    //Title and description
    `# ${data.title}
    
    ## Description
    
    ${data.description}`

  //Table of contents 
  let tableOfContents = `## Table of Contents`

  readme += tableOfContents;

  if (data.installation !== '') {
    tableOfContents += `* [Installation](#installation)` 
  };

  tableOfContents += `* [Usage](#usage)`;

  tableOfContents += `* [Credits](#credits)`

  tableOfContents += `* [License](#license)`

  if (data.badges != '') {
    tableOfContents += `* [Badges](#badges)`
  };

  if (data.features != '') {
    tableOfContents += `* [Features](#features)`
  };

  if (data.contributing != '') {
    tableOfContents += `* [Contributing](#contributing)`
  };

  if (data.tests != '') {
    tableOfContents += `* [Tests](#tests)`
  };

  //if user chooses to put an Installation section
  if (data.installation != '') {
    readme += `
      ## Installation
      
      *Steps required to install project:*
      
      ${data.installation}`
  };

  //Usage and Credits section
  readme += `
    ## Usage
    
    *Instructions and examples for use:*
    
    ${data.usage}
    
    ## Credits
    
    *List of collaborators:*
    
    ${data.credits}`

  //License section
  readme += `
  ## License
  
  ${data.license}`

  //optional Badges section
  if (data.badges != '') {
    `
    ## Badges
    
    ${data.badges}`
  };

  //optional Features section
  if (data.features != '') {
    `
    ## Features
    
    ${data.features}`
  };

  //optional Contributing Section
  if (data.contributing != '') {
    `
    ## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${data.contributing}`
  };

  //optional Tests Section
  if (data.tests != '') {
    `
    ## Tests

    *Tests for application and how to run them:*
    
    ${data.tests}`
  };

  return readme;
};

module.exports = generateMarkdown();
