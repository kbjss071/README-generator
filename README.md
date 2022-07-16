# README-generator

## Link to the deployed application
https://kbjss071.github.io/README-generator/

<hr>

## To-do list
- A command-line application should prompt for information about my application repository. And with given prompt, a high-quality, professional README.md is generated with the title of my project and sections entitlted description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
- When a project title is entered, the title should be displayed as the title of the README.
- Prompt user to enter a description, installation instructions, usage information, contribution guidelines, and test instructions, the information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
- Prompt user to choose a license for an application from a list of options, and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- Prompt user to enter GitHub username, then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
- Prompt user to enter email address, then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
- Table of Contents should be designed to be clicked and take user to the corresponding section of the README.

<hr>

## Works done in this project
- Created `index.js` and `generateMarkdown.js` file to prompt user to enter repository data and generate README.md for the repository.
- In `index.js`:
    - created questions to prompt user to provide information of the repository
    - created functions `writeToFile` and `init` to write a README.md in a currently working directory.

- In `generateMarkdown.js`:
    - created functions `renderLicenseBadge(license)`, `renderLicenseLink(license)`, `renderLicenseSection(lincese)` to make a badge for license, reference to license section in the markdown, words in the license section.
    - created a function `generateMarkdown(data)` to receive data passed by user and generate a markdown file with some structures and given data.
- Created a `.gitignore` which includes `node_modules/` and `.DS_Store/` in order to avoid uplaoding those files to GitHub repository.
- Included a video to introduce how to use the application.
- Added screenshots which includes necessary information to let people who has not been introduce to the application understand the purpose and function of it.