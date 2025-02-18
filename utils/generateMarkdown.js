function readMeGenerator(response) {
    return `
   <h1 align ="center">${response.projectName}<h1>



## Description
${response.projectDescription}

# Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [License](#license)
* [Contributions](#contributions)
* [Github](#github)

## Technologies

<li>${response.technologies}</li>



## Installation
${response.projectinstallation}

## License
![License](https://img.shields.io/badge/license-${response.projectLicense}-blue.svg)
<br>
This Project is licensed under the ${response.projectLicense} license.

## Contributions
${response.projectContributions}

## Github
Questions? 
Contact me through my github ${response.githubUsername}

Email: ${response.email}






    `;
}

module.exports = readMeGenerator;
