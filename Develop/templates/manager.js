const Manager = require("../lib/Manager");

function writeManager(newManager){ 
    return (`<div class="card bg-info mb-3 shadow" style="width: 18rem;">
    <div class="card-header text-center">
    <p class="h4"><i class="fas fa-mountain"></i> Manager</p>
    <h5 class="card-title text-center">${newManager.getName()}</h5>
</div>
<div class="card-body bg-white">
    <p class="card-text">ID: ${newManager.getId()}</p>
    <p class="card-text">Email: ${newManager.getEmail()}</p>
    <p class="card-text">Office #: ${newManager.getOfficeNumber()}</p>
</div>
</div>`);
};

module.exports = writeManager;
