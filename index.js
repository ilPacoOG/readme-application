// TODO: Include packages needed for this application
// import fs from "fs";
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        Message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'desciption',
        Message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'useCase',
        Message: 'What prblem does it solve?',
    },
    {
        type: 'input',
        name: 'motivation',
        Message: 'What was your motivation for creating this project?'
    },
    {
        type: 'input',
        name: 'toolsUsed',
        Message: 'What packages did you use to create this application?'
    },
    

];

inquirer.prompt(questions).then(answers => {
    console.log(`Project Name: ${answers.projectName}`);
    console.log(`Description: ${answers.description}`);
    console.log(`Use Case: ${answers.useCase}`);
    console.log(`Motivation: ${answers.motivation}`);
    console.log(`Tools Used: ${answers.toolsUsed}`);
    
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) 


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
