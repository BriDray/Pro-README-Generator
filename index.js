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
        type: 'input',
        name: 'License1',
        message: "what license was used?",
      },
      {
        type: 'input',
        name: 'License2',
        message: "link for license.",
      },
      {
        type: 'input',
        name: 'pStatus',
        message: "Project Status Blurb.",
      },
      {
        type: 'input',
        name: 'github',
        message: "Github Deployed Link",
      },
      {
        type: 'input',
        name: 'roadMap',
        message: "ideas/plans for the future fot the project.",
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
        writeToFile("README.md",`
       # ${answers.ProjectTitle}

       ## Description
       ${answers.description}

       ## Installation
       ${answers.installation}

       ## Usage
       ${answers.usage}
       ${answers.usageVisual}

       ## Credits
       ${answers.credits}

       ## License
       [${answers.License1}](${answers.License2})

       ## Project Status
       ${answers.pStatus}

       ## Github Link
       [${answers.ProjectTitle}](${answers.github})

       ## Roadmap
       ${answers.roadMap}
        `)
      });
      
}

// Function call to initialize app
init();
