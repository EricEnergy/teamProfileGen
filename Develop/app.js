const inquirer = require("inquirer");
const combinedinfo = require("./templates/main.js");
const fs = require('fs');

combinedinfo();




inquirer.prompt([
    {
        message: "Weclome! Lets Set up you team starting with the managers first name.",
        type: "input",
        name: "managerName",
    },
    {
        message: "What is the managers work Id?",
        type: "input",
        name: "managerId",

    },
    {
        message: "Please include his/hers email here.",
        type: "input",
        name: "managerEmail",
    },
    {
        message: "What number can we reach him/her at?",
        type: "input",
        name: "managerPhoneNum",
    },
    {
        type: "list",
        message: "How many Engineers are involved in this team?",
        name: "engineerNum",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
    },
    {
        type: "list",
        message: "How many Engineers are involved in this team?",
        name: "internNum",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
    },

]).then(data => {
    
    var filename = data.managerName.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});
