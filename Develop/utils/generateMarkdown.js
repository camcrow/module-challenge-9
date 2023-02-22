// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    This application uses the following license:
    ${renderLicenseLink(license)}`;
    } else {
      return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## [Description]
  ${data.description}

  ## [Installation]
  ${data.installation}

  ## [Usage]
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
 
  ## [Tests]
  ${data.test}


  My information:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;