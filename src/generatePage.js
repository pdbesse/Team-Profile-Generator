// need functions to generate HTML cards for manager, engineer, intern?
// generatePage() has rest of HTML defined in it
// generatePage() to insert created m/e/i cards into rest of HTML?
// insert generated cards into array, insert array via template literal?

function renderManager() {
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

function renderEngineer() {
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

function renderIntern() {
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

function generatePage(response) {
    
}

module.exports = generatePage;