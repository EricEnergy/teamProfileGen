const Intern = require("../lib/Intern");
const newIntern = new Intern("Eric", 80, "e@gmailcom", "friends")

function writeIntern(){ 
    return (`<div class="card bg-warning m-3 shadow" style="width: 18rem;">
    <div class="card-header text-center">
        <p class="h4"><i class="fas fa-campground"></i> Intern</p>
        <h5 class="card-title text-center">${newIntern.getName()}</h5>
    </div>
    <div class="card-body bg-white">
        <p class="card-text">ID: ${newIntern.getId()}</p>
        <p class="card-text">Email: ${newIntern.getEmail()}</p>
        <p class="card-text">School: ${newIntern.getSchool()}</p>

    </div>
</div>`);
};

module.exports = writeIntern;