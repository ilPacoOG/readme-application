// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None' || !license) {
    return ''; 
  }

  const badges = {
    'Apache2.0': 'https://img.shields.io/badge/license-Apache2.0-brightgreen',
    'Boost1.0': 'https://img.shields.io/badge/license-Boost1.0-brightgreen',
    'BSD': 'https://img.shields.io/badge/license-BSD-brightgreen',
    'Eclipse': 'https://img.shields.io/badge/license-Eclipse-brightgreen',
    'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen'
  };

  return `![License](${badges[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None' || !license) {
    return '';
  }

  const licenseLinks = {
    'Apache2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Boost1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'BSD': 'https://opensource.org/licenses/BSD-3-Clause',
    'Eclipse': 'https://www.eclipse.org/legal/epl-2.0/',
    'MIT': 'https://opensource.org/licenses/MIT'
  };

  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None' || !license) {
    return ''; 
  }
  
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `
## License

${badge}

This project is licensed under ${license}. For license details, visit (${link}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
${data.video ? '- [How-To Video](#how-to-video)' : ''} <!-- ternary operator used to conditionally add demo video if provided by user when prompted. The concept came from a 'README generator' how-to I found but did not save -->
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [GitHub Username](#github-username)
- [Questions](#questions)

## Installation
${data.installation}

${data.video ? `## How-To Video\nThe how-to video and demonstration can be found [here](${data.video}).\n` : ''}  <!-- Conditionally add How-To Video section -->


## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## Dependencies
${data.dependencies}

## GitHub Username
[${data.username}](https://github.com/${data.username})

## Questions
If you have any questions about the project, you can reach me by email at ${data.email ? data.email : 'No email provided'}

`;
}

export default generateMarkdown;