const Intern = require("../lib/Intern");

function writeIntern(newIntern){ 
    return (`<div class="card bg-warning m-3 shadow" style="width: 18rem;">
    <div class="card-header text-center">
        <p class="h4"><i class="fas fa-campground"></i> Intern</p>
        <h5 class="card-title text-center">${newIntern[0].getName()}</h5>
    </div>
    <div class="card-body bg-white">
        <p class="card-text">ID: ${newIntern[0].getId()}</p>
        <p class="card-text">Email: ${newIntern[0].getEmail()}</p>
        <p class="card-text">School: ${newIntern[0].getSchool()}</p>

    </div>
</div>`);
};

module.exports = writeIntern;