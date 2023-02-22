// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
        {
        name:'title',
        type: 'input',
        message: 'Enter title of Project',
        validate: chosenTitle => {
            if(chosenTitle) {
                return true;
            } else{
                return false;
            }
            }
        },
        {
            name:'description',
            type: 'input',
            message: 'Describe your project and what purpose it serves.',
            validate: chosenDes => {
                if(chosenDes) {
                    return true;
                } else{
                    return false;
                }
                }
            },
            {
                name:'table-of-contents',
                type: 'input',
                message: 'Enter the table of contents for your project.',
                validate: chosenTable => {
                    if(chosenTable) {
                        return true;
                    } else{
                        return false;
                    }
                    }
                },
                {
                    name:'installation',
                    type: 'input',
                    message: 'Give a guide on how to install this project.',
                    validate: chosenTable => {
                        if(chosenTable) {
                            return true;
                        } else{
                            return false;
                        }
                        }
                    },
                    {
                        name:'usage',
                        type: 'input',
                        message: 'What is the intended usage of this project?',
                        validate: chosenTable => {
                            if(chosenTable) {
                                return true;
                            } else{
                                return false;
                            }
                            }
                        },
                        {
                            name:'license',
                            type: 'input',
                            message: 'What license does your project use?',
                            choices: ['apache','MIT License','GNU General Public License','none']
                            },    
                                             
                        {
                            name:'test',
                            type: 'input',
                            message: 'Enter instructions on testing the application.',
                            validate: chosenTable => {
                                if(chosenTable) {
                                    return true;
                                } else{
                                    return false;
                                }
                                }
                            },
                            {
                                name:'githubUsername',
                                type: 'input',
                                message: 'Enter your GitHub Username',
                                validate: chosenTable => {
                                    if(chosenTable) {
                                        return true;
                                    } else{
                                        return false;
                                    }
                                    }
                                },
                                {
                                    name:'email',
                                    type: 'input',
                                    message: 'Enter your email',
                                    validate: chosenTable => {
                                        if(chosenTable) {
                                            return true;
                                        } else{
                                            return false;
                                        }
                                        }
                                    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error){
        if (error) {
            return console.log(error)
        }
        else {
            console.log('success')}
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        const newFile = 'README.md';
        writeToFile(newFile, data)
    });
}

// Function call to initialize app
init();
