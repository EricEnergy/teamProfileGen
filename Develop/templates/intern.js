const Intern = require("../lib/Intern");

function writeIntern(newIntern){ 
    let internHTML = "";
    newIntern.forEach(element => {
    internHTML += `<div class="card bg-warning m-3 shadow" style="width: 18rem;">
    <div class="card-header text-center">
        <p class="h4"><i class="fas fa-campground"></i> Intern</p>
        <h5 class="card-title text-center">${element.getName()}</h5>
    </div>
    <div class="card-body bg-white">
        <p class="card-text">ID: ${element.getId()}</p>
        <p class="card-text">Email: ${element.getEmail()}</p>
        <p class="card-text">School: ${element.getSchool()}</p>

    </div>
</div>`
});
 
return internHTML;
};


module.exports = writeIntern;
