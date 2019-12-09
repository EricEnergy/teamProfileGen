const Engineer = require("../lib/Engineer");



function writeEngineer(newEngineer){ 
    let engineerHTML = "";
newEngineer.forEach(element => {
    engineerHTML += ` <div class="card bg-success m-5 shadow" style="width: 18rem;">
    <div class="card-header text-center 1.5rem">
                <p class="h4"><i class="fas fa-tree"></i> Engineer</p>
                <h5 class="card-title text-center">${element.getName()}</h5>
            </div>
            <div class="card-body bg-white">
                <p class="card-text">ID: ${element.getId()}</p>
                <p class="card-text">Email: ${element.getEmail()}</p>
                <p class="card-text">GitHub: ${element.getGithub()}</p>

            </div>
        </div>`
});

    
    return engineerHTML;
    };


module.exports = writeEngineer;

