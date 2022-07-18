//declaring the packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeGenerator = require("./utils/generateMarkdown");
const readMeWrite = util.promisify(fs.writeFile);

//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//[![Appache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![GNU v3.0](https://img.shields.io/badge/License-GNU%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)
     
function license(input){
    if (input === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (input === "APACHE"){
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (input === "GNUv3.0"){
        return "[![License:GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if (input === "Mozilla 2.0"){
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }

}
//created function that holds questions for the user
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
            choices: ["MIT", "APACHE","GNUv3.0","Mozilla2.0"]
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

async function initial() {
    try {
        const response = await initialPrompt();
        const readMe = readMeGenerator(response);
        await readMeWrite('./README.md', readMe);
        response.license = license(response.projectLicense);
        console.log("File has been written");
    } catch (err) {
        console.log(err);
    }
}
//calling the function
initial();












