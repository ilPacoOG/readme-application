// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from 'inquirer';
import path from "path";
import generateMarkdown from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the application installed?',
    },
    {
        type: 'input',
        name: 'video',
        message: "Please provide a link to an instructional video if available."
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use case for this application?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who were the contributors to the development of this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide the tests performed.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'Which dependencies were used to create this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license that this project operates under?', /* options taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba */
        choices: ['Apache2.0', 'Boost1.0', 'BSD', 'Eclipse', 'MIT', 'None'],        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide and email where users can reach you.',
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
        //added the following to handle errors in writing the README file. description of try catch found in JS error handling at W3 https://www.w3schools.com/js/js_errors.asp#:~:text=When%20an%20error%20occurs%2C%20JavaScript,two%20properties%3A%20name%20and%20message 
        try { /* this can also be accomplished with return writeToFile("README.md", generateMarkdown(answers)); .then(() => { console.log("README.md successfully created."); */
          writeToFile("README.md", generateMarkdown(answers));
          console.log("README.md successfully created.");
        } catch (error) {
          console.error("Error writing the README.md file:", error);
        }
      });
}

// // Function call to initialize app
init();
