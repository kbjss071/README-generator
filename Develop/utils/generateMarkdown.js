function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license == 'None') {
    return '';
  }
  // If user chooses one of choices, it will return license badge accordingly.
  if (license == 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license == 'APACHE 2.0'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  if (license == 'GPL 3.0'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license == 'BSD 3'){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  }
  if (license == 'GNU'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license == 'Mozilla Public'){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  if (license == 'Eclipse'){
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    // If license is provided, it will create an element in the table content and the element is linked to license section as it is clicked.
    return `\n  - [License](#license)\n`;
  }
  //Otherwise, return nothing (nothing will be created)
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }

  // If license is provided by user, license will be created and located under license section

  //from https://github.com/facebook/react/blob/main/LICENSE
  if(license == 'MIT'){
      return `## License

      MIT License

      Copyright (c) Facebook, Inc. and its affiliates.

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      `
    }
  // from https://gist.githubusercontent.com/YASHWANTHINI/2fdf0538bf69c05ae990150bf6f12f25/raw/bd69747e216283b9846e5abb39f8358159065121/Apache-LICENSE.md
  if (license == 'APACHE 2.0'){
      return `## License

      Apache License
      Version 2.0, January 2004
      http://www.apache.org/licenses/
      `
  }
  if (license == 'GPL 3.0'){
      return `## License

      This project is license under the GNU General Public License.

      You can find more about the GNU in https://www.gnu.org/licenses/gpl-3.0.en.html
      
      `
  }
  // from https://gist.githubusercontent.com/YASHWANTHINI/5ec055150da9d33855c4ba0f7a0b338e/raw/9f465098edd924a06fe13cba328970f5297248fa/BSDV3-license.md
  if (license == 'BSD 3'){
      return `## License

      Copyright (c) <year>, <copyright holder>
      All rights reserved.

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
      ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
      WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
      ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
      SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      `
  }
  if (license == 'GNU'){
    return `## License

    This project is license under the GNU General Public License.

    You can find more about the GNU in https://www.gnu.org/licenses/gpl-3.0.en.html
      
    `
  }
  if (license == 'Mozilla Public'){
    return `## License
      
    This project is licensed under the Mozilla Public License Version 2.0.

    You can find more about the Mozilla Public License Version 2.0 explained in "https://github.com/IQAndreas/markdown-licenses/blob/master/mpl-v2.0.md".
    `
  }
  if (license == 'Eclipse'){
    return `## License

    This project is licensed under the Eclipse Public License.

    You can find more about the Eclipse Public License in "https://github.com/IQAndreas/markdown-licenses/blob/master/epl-v1.0.md".
    `
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Lines below will be texts of README.md
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 

  - [Description](#Description)
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [Questions](#questions)
  
  ## Installation
  
  Run the following command in order to install necessary dependencies:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage

  ${data.usage}
  
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  Run the following command to test your repo:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at my email address ${data.email}.
  
  More of my works can be found at my GitHub account [${data.username}](https://github.com/${
      data.username
    }/).

`;
}

module.exports = generateMarkdown;
