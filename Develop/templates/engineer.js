const Engineer = require("../lib/Engineer");

function writeEngineer(newEngineer){ 
    return (` <div class="card bg-success m-5 shadow" style="width: 18rem;">
    <div class="card-header text-center 1.5rem">
                <p class="h4"><i class="fas fa-tree"></i> Engineer</p>
                <h5 class="card-title text-center">${newEngineer[0].getName()}</h5>
            </div>
            <div class="card-body bg-white">
                <p class="card-text">ID: ${newEngineer[0].getId()}</p>
                <p class="card-text">Email: ${newEngineer[0].getEmail()}</p>
                <p class="card-text">GitHub: ${newEngineer[0].getGithub()}</p>

            </div>
        </div>`);
};


module.exports = writeEngineer;

