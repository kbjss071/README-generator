function renderLicenseBadge(license) {
  if (license !== 'None') {
    // If license is not selected as 'none', it will create a link to license badge with a selected license name
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    // If license is provided, it will create an element in the table content and the element is linked to license section as it is clicked.
    return `\n  - [License](#license)\n`;
  }
  //Otherwise, return nothing (nothing will be created)
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // If license is provided by user, a line below will be created and located under license section
    return `## License

    This project is licensed under the ${license} license.`;
    }
  // Otherwise, nothing will be created
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(response) {
  // Lines below will be texts of README.md
  return `# ${response.projectName}
  ${renderLicenseBadge(response.license)}

  ## Description
  
  ${response.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  ${renderLicenseLink(response.license)}
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [Questions](#questions)
  
  ## Installation
  
  Run the following command in order to install necessary dependencies:
  
  \`\`\`
  ${response.installation}
  \`\`\`
  
  ## Usage
  
  ${response.usage}
  
  ${renderLicenseSection(response.license)}

  ${renderLicenseBadge(response.license)}

    
  ## Contributing
  
  ${response.contributing}
  
  ## Tests
  
  Run the following command to test your repo:
  
  \`\`\`
  ${response.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at my email address ${response.email}.
  
  More of my works can be found at [${response.username}](https://github.com/${
      response.username
    }/).

`;
}

module.exports = generateMarkdown;
