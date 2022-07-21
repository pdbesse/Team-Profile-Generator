# Team Profile Generator

## Description

This app is a node.js program designed to create a team profile .html page from various user prompts. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippets](#code-snippets)
* [Technology](#technology)
* [Credits](#credits)
* [Testing](#testing)
* [License](#license)

## Installation

The files for this program can be downloaded [here]https://github.com/pdbesse/Team-Profile-Generator/archive/refs/heads/main.zip). 

This app requires node.js to be installed. For download and installation instructions, please see [nodejs.org](https://nodejs.org/en/download/).

This app also requires Inquirer and Jest to be installed. To do this, open the terminal and navigate to the extracted folder. Open terminal in the folder and enter: 
```
npm install
```
This will download any modules required for the app to work. Still in the console, enter:
```
node index.js
```
This will launch the program.

## Usage

![usage-gif]()

Upon running the index.js file in node, the user is prompted to enter the team manager's name, ID number, email, and office number. The user then selects if they would like to add another employee. If yes, the user is prompted to choose between an engineer or an intern. If no, the teampage.html file is written.

For an engineer, the user is prompted to enter the name, ID number, email, and GitHub profile. For an intern, the user is prompted to enter the name, ID number, email, and school.

You may view a video of the application being used [here]().

## Code Snippets

```javascript

```


```javascript

```


```javascript

```


```javascript

```


```javascript

```


```javascript

```


```javascript

```


## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [Bootstrap](https://getbootstrap.com/)
* [node.js](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer/)
* [File System - node.js](https://nodejs.org/api/fs.html)
* [Jest](https://jestjs.io/)

## Credits

All coding credited to Phillip Besse.  Javascript pseudocoded with tutor Joe Young and Maverick Wong.

Websites Referenced:
* [Nodejs.devs - FS](https://nodejs.dev/learn/the-nodejs-fs-module)
* [Nodejs.org - FS.writeFile](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback)
* [MDN Docs - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Testing

The app's classes may be tested using jest. To do this, navigate to the parent folder in GitBash and type:
```
npm test
```
This will run the .test.js files found in the tests directory.

## License

Phillip Besse's Team Profile Generator is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) 2022 Phillip Besse

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