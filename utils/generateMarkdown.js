// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'N/A') {
    return "";
  } else if (license == 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return "";
  } else if (license == 'Apache_2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }

  else if (license == 'BSD_3--Clause') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  }

  else if (license == 'GPLv3') {
    return `(https://opensource.org/licenses/gpl-3.0)`
  }

  else if (license == 'GPL_v2') {
    return `(https://opensource.org/licenses/old-licenses/gpl-2.0.en.html)`
  }

  else if (license == 'IPL_1.0') {
    return `(https://opensource.org/licenses/IPL-1.0)`
  }

  else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A') {
    return "";
  } else {
    return `This project is covered under the ${license} license.`
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  readme = `${renderLicenseBadge(data.licenses)}${renderLicenseLink(data.licenses)}\n
# ${data.title} \n
## Description \n
\t ${data.description} \n
`;
  if (data.includeTC == 'Yes') {
    readme = readme + `## Table of Contents\n
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Credits](#credits)\n
  [License](#license)\n
  [Contributions](#contributions)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  `
  } else {
    readme = readme + `## Table of Contents\n
  N/A\n
  `
  };
  readme = readme + `## Installation\n
${data.installation} \n
## Usage \n
${data.usage} \n
## Credits \n
${data.credits} \n
## License \n
${renderLicenseSection(data.licenses)} \n 
## Contributions \n
${data.contributions} \n
## Tests \n
${data.tests}
## Questions \n
For any questions regarding this project please contact me at my -\n
GitHub: [${username}](https://github.com/${username}) \n
Email: ${email}
`;
return readme;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};