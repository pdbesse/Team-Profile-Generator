// need functions to generate HTML cards for manager, engineer, intern?
// generatePage() has rest of HTML defined in it
// generatePage() to insert created m/e/i cards into rest of HTML?
// insert generated cards into array, insert array via template literal?

function renderManager(manager) {
    return `<div class="container col">
    <!-- card -->
    <div class="card">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${manager.name}</h3>
            <!-- ID Number -->
            <h5 class="card-title">${manager.role}</h5>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${manager.id}</p>
            <!-- Email -->
            <p class="card-text">Email: ${manager.email}</p>
            <!-- Office Number -->
            <p class="card-text">Office Number: ${manager.officeNum}</p>
        </div>
    </div>
</div>
`
}

function renderEngineer(engineer) {
    return `<div class="container col">
    <!-- card -->
    <div class="card">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${engineer.name}</h3>
            <!-- ID Number -->
            <h5 class="card-title">${engineer.role}</h5>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${engineer.id}</p>
            <!-- Email -->
            <p class="card-text">Email: ${engineer.email}</p>
            <!-- Office Number -->
            <p class="card-text">GitHub Profile: www.github.com/${engineer.github}</p>
        </div>
    </div>
</div>
`
}

function renderIntern(intern) {
    return `<div class="container col">
    <!-- card -->
    <div class="card">
        <!-- card body -->
        <div class="card-body">
            <!-- Name -->
            <h3 class="card-title text-center">${intern.name}</h3>
            <!-- ID Number -->
            <h5 class="card-title">${intern.role}</h5>
            <!-- ID Number -->
            <p class="card-text">ID Number: ${intern.id}</p>
            <!-- Email -->
            <p class="card-text">Email: ${intern.email}</p>
            <!-- Office Number -->
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
</div>
`
}

function generatePage(teamArr) {
    // console.log(data)
    // need for loop to go through data array and isolate each role
    // then execute render function for each role

    for (i = 0; i < teamArr.length; i++) {
        const employee = teamArr[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            renderManager(employee);
            // console.log(renderManager(employee));
        } else if (role === 'Engineer') {
            renderEngineer(employee);
            // console.log(renderEngineer(employee));
        } else if (role === 'Intern') {
            renderIntern(employee);
            // console.log(renderIntern(employee));
        } else {
            return;
        }
    
    // let man = data.filter(employee => employee.getRole() === "Manager") 
    // console.log(man);
    
    // let mancard = renderManager(man);
    // console.log(mancard);
    // renderEngineer();
    // renderIntern();

    }
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

        </div>
    </main>

</body>

</html>`

.then(console.log(generatePage(teamArr)));
}

module.exports = generatePage;