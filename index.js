//declaring the packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeGenerator = require("./utils/generateMarkdown");
const readMeWrite = util.promisify(fs.writeFile);


function initialPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "What is the description of your project?"
        },
        {
            type: "input",
            name: "projectUse",
            message: "What is the use of your project?"
        },
        {
            type: "input",
            name: "projectinstallation",
            message: "What are the installation instructions for your project?"
        },
        {
            type: "list",
            name: "projectLicense",
            message: "Will You be using a license? if so select the license type",
            selection: ["MIT", "APACHE","None"]
        },
        {
            type: "input",
            name: "projectContributions",
            message: "Does your project have any contributions? If so, list them here. otherwise, leave this blank"
        },
        {
            type: "input",
            name: "githubUsername",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        
    ]);
}












