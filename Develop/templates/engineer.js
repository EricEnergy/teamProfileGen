const Engineer = require("../lib/Engineer");
const newEngineer = new Engineer("Josh", 80, "j@gmail.com", "engy")

function writeEngineer(){ 
    return (` <div class="card bg-success m-5 shadow" style="width: 18rem;">
    <div class="card-header text-center 1.5rem">
                <p class="h4"><i class="fas fa-tree"></i> Engineer</p>
                <h5 class="card-title text-center">${newEngineer.getName()}</h5>
            </div>
            <div class="card-body bg-white">
                <p class="card-text">ID: ${newEngineer.getId()}</p>
                <p class="card-text">Email: ${newEngineer.getEmail()}</p>
                <p class="card-text">GitHub: ${newEngineer.getGithub()}</p>

            </div>
        </div>`);
};


module.exports = writeEngineer;

