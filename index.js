// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'ProjectTitle',
    message: "What's the name of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Project Description:",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Installation Directions:",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Usage Blurb goes here:",
  },
  {
    type: 'input',
    name: 'usageVisual',
    message: "Add a Screenshot or video here.",
  },
  {
    type: 'input',
    name: 'credits',
    message: "who should get credits for this project?",
  },
  {
    type: 'list',
    message: 'What License did you choose?',
    name: 'license',
    choices: ['MIT', 'GNU', 'Apache', 'None'],
  },
  {
    type: 'input',
    name: 'pStatus',
    message: "Project Status Blurb.",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Include any tests done for the project.",
  },
  {
    type: 'input',
    name: 'github',
    message: "Github Deployed Link",
  },
  {
    type: 'input',
    name: 'roadMap',
    message: "ideas/plans for the future for the project.",
  },
  {
    type: 'input',
    name: 'name',
    message: "Name for questions section",
  },
  {
    type: 'input',
    name: 'email',
    message: "e-mail for questions section",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("initialize")
  inquirer.prompt(questions).then((answers) => {
    // console.log(JSON.stringify(answers, null, '  '));
    writeToFile("Project-Example/ExampleProject.md",
`
# ${answers.ProjectTitle}

![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=GREEN)

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}
${answers.usageVisual}

## Credits
${answers.credits}

## Project Status
${answers.pStatus}

## Tests
${answers.tests}

## Roadmap
${answers.roadMap}

## Github Link
[${answers.ProjectTitle}](${answers.github})

## Questions
Hi, my name is ${answers.name}. If you have any questions about my project, please E-mail me [HERE!](mailto:${answers.email})
`)
  });

}

// Function call to initialize app
init();
