// Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
      },
      {
        type: 'input',
        name: 'projectName',
        message: "Please provide your project's name",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license do you use for your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'GNU', 'Mozilla Public', 'Eclipse', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    // writeFileSync: writeFileSync() is a synchronous method & creates a new file if the specified file does not exist
    // writeFile is an asynchronous method
    // path.join: this method joins the specified path segments into one path. 
    // So path.join(path name, filename) will create a path to make the named file into the currently working directory.
    return fs.writeFileSync(path.join('./', fileName), data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // After getting response from user, generate README.md based on user's responses.
    console.log('Generating README...');
    // create response from user as an object
    const res = {...response};
    // Call writeTofile function with file named README.md and gerateMarkdown function to generate what's in the markdown file
    writeToFile('README.md', generateMarkdown(res));
  })
}

// Function call to initialize app
init();
