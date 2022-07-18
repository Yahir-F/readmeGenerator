function readMeGenerator(response) {
    return `
   <h1 align ="center">${response.projectName}<h1>

${response.license}

## Description
${response.projectDescription}

# Table of Contents
* [Description](#description)
* [Project-Use](#usage)
* [Project-Installation](#installation)
* [ProjectLicense](#license)
* [Project-Contributions](#contributions)
* [Github-Username](#github)

## Project-Use
${response.projectUse}

## Project-Installation
${response.projectinstallation}

## ProjectLicense
![License](https://img.shields.io/badge/license-${response.projectLicense}-blue.svg)
<br>
This Project is licensed under the ${response.projectLicense} license.

## Project-Contributions
${response.projectContributions}

## Github-Username
Questions? 
Contact me through my github ${response.githubUsername}

Email: ${response.email}






    `;


}

module.exports = readMeGenerator;
