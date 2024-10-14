// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from 'inquirer';
import path from "path";
import generateMarkdown from './utils/generateMarkdown.js'

// const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'desciption',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'useCase',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for creating this project?'
    },
    {
        type: 'input',
        name: 'toolsUsed',
        message: 'What packages did you use to create this application?'
    },
    

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
 

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        console.log("README.md file is being generated.");
        //added the following to handle errors in writing the README file. 
        try {
          writeToFile("README.md", generateMarkdown(answers));
          console.log("README.md successfully created.");
        } catch (error) {
          console.error("Error writing the README.md file:", error);
        }
      });
}

// // Function call to initialize app
init();
