// function to render manager card; returns template literal string
function renderManager(manager) {
    // function populates string with data from manager.name, manager.id, manager.email, and manager.officeNum
    return `
<div class="container col">
    <!-- card -->
    <div class="card m-2">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${manager.name}</h3>
            <!-- ID Number -->
            <p class="card-text">Manager</p>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${manager.id}</p>
            <!-- Email -->
            <p class="card-text"><a href="mailto:${manager.email}">Email</a></p>
            <!-- Office Number -->
            <p class="card-text">Office Number: ${manager.officeNum}</p>
        </div>
    </div>
</div>
`
}

// function to render engineer card; returns template literal string
function renderEngineer(engineer) {
    // function populates string with data from engineer.name, engineer.id, engineer.email, and engineer.github
    return `
    <div class="container col">
    <!-- card -->
    <div class="card m-2">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${engineer.name}</h3>
            <!-- ID Number -->
            <p class="card-text">Engineer</p>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${engineer.id}</p>
            <!-- Email -->
            <p class="card-text"><a href="mailto:${engineer.email}">Email</a></p>
            <!-- Office Number -->
            <p class="card-text"><a href="https://www.github.com/${engineer.github}" target="_blank">GitHub Profile</a></p>
        </div>
    </div>
</div>
`
}

// function to render intern card; returns template literal string
function renderIntern(intern) {
    // function populates string with data from intern.name, intern.id, intern.email, and intern.school
    return `
<div class="container col">
    <!-- card -->
    <div class="card m-2">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${intern.name}</h3>
            <!-- ID Number -->
            <p class="card-text">Intern</p>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${intern.id}</p>
            <!-- Email -->
            <p class="card-text"><a href="mailto:${intern.email}">Email</a></p>
            <!-- Office Number -->
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
</div>
`
}

// function to generate and return all generated cards as a string
function generateTeam(teamArr) {
    // empty string to hold generated card strings
    var renderSTR = ''
    // for loop to iterate through teamArr
    for (let i = 0; i < teamArr.length; i++) {
        // create variable for each iteration index
        const employee = teamArr[i];
        // create variable for getRole() result
        const role = employee.getRole();
        // if getRole() result is 'Manager'
        if (role === 'Manager') {
            // variable holds string from renderManager()
            let tempMan = renderManager(employee);
            // add string from renderManager() to card string
            renderSTR = renderSTR + tempMan;
            // console.log(renderManager(employee));
        }
        // if getRole() result is 'Engineer'
        if (role === 'Engineer') {
            // variable holds string from renderEngineer()
            let tempEng = renderEngineer(employee);
            // add string from renderEngineer() to card string
            renderSTR = renderSTR + tempEng;
            // console.log(renderEngineer(employee));
        }
        // if getRole() result is 'Intern'
        if (role === 'Intern') {
            // variable holds string from renderIntern()
            let tempInt = renderIntern(employee);
            // add string from renderIntern() to card string
            renderSTR = renderSTR + tempInt;
            // console.log(renderIntern(employee));
        }
        // let man = data.filter(employee => employee.getRole() === "Manager") 
        // console.log(man);

        // let mancard = renderManager(man);
        // console.log(mancard);
        // renderEngineer();
        // renderIntern();
    }
    // return the string holding all generated cards
    return renderSTR;
}

// function to return the teampage.HTML string
function generatePage(teamArr) {
    // string containing all generated cards is inserted into .html template literal string via generateTeam()
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Your Generated Team</title>
    <style>
        .jumbotron {
            text-align: center;
            background-color: #0079ad;
            color: black;
            border-radius: 0;
            border-bottom: 5px solid black;
        }
    </style>
</head>

<body>
    <header class="jumbotron text-container row">
        <h1 class="display-3">Your Team</h1>
    </header>

    <main>
        <!-- container div -->
        <div class="row">
            ${generateTeam(teamArr)}
        </div>
    </main>

</body>

</html>
`
}

// enables generatePage.js to be exported
module.exports = generatePage;