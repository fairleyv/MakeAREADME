// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a file name for your README',
        name: 'fileName',
},

{
        type: 'input',
        message: 'Please provide a title for your project.',
        name: 'title',
},

{
    type: 'input',
    message: 'Please provide a description for you project.',
    name: 'description',
},

{
    type: 'list',
    message: 'Would you like to include a table of contents?',
    choices: ['Yes','No'],
    name: 'includeTC',
}, 

{
    type: 'input',
    message: 'please provide the steps required to install your project',
    name: 'installation',
},

{
    type: 'input',
    message: 'Please provide instructions and examples for use.',
    name: 'usage'
}, 

{
    type: 'input',
    message: 'Please provide collaborators, third-party assets, and tutorials used',
    name: 'credits',
}, 

{
    type: 'list',
    message: 'Would you like to include a License?',
    choices: ['Apache_2.0', 'BSD_3--Clause', 'GPLv3', 'GPL_v2', 'IPL_1.0', 'ISC', 'MIT', 'N/A'],
    name: 'licenses',
},

{
    type: 'input',
    message: 'Please provide guidelines for contributions',
    name: 'contributions',
},

{
    type: 'input', 
    message: 'Please provide test instructions',
    name: 'tests'
}, 

{
    type: 'input', 
    message: 'Please provide your GitHub username',
    name: 'username'
}, 

{
    type: 'input', 
    message: 'Please provide an email address for contact',
    name: 'email'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, gm.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(`${data.fileName}.md`, data);
        });
};

// Function call to initialize app
init();