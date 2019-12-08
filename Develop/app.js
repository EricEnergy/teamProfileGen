const inquirer = require("inquirer");
const combinedinfo = require("./templates/main.js");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var engineerArray = [];

function createAEngineer(newManager, engineerInt, internInt) {
    console.log(newManager);


    inquirer.prompt([
        {
            message: "Computing.... Set up engineers here... First name please.",
            type: "input",
            name: "engName",
        },
        {
            message: "What type of name is that... please id here.",
            type: "input",
            name: "engId",
        },
        {
            message: "Please include his/hers email here.",
            type: "input",
            name: "engEmail",
        },
        {
            message: "We need this engineers Github profile for the NSA directory.. I mean, GitUser name please.",
            type: "input",
            name: "engGithub",
        },
    ]).then(data => {
        var newEngineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
        engineerArray.push(newEngineer);

        if(engineerInt === 1){
            createAnIntern(newManager,engineerArray, internInt)
      
        }else{
            createAEngineer(newManager, engineerInt - 1,internInt);
        };

    });
};


var internArray = [];

function createAnIntern (newManager, engineerArray, internInt) {
    console.log(newManager);


    inquirer.prompt([
        {
            message: "Lets set up your intern. First name?",
            type: "input",
            name: "intName",
        },
        {
            message: "Interns Id number?",
            type: "input",
            name: "intId",
        },
        {
            message: "Please include his/hers email here.",
            type: "input",
            name: "intEmail",
        },
        {
            message: "We need this engineers Github profile for the NSA directory.. I mean, GitUser name please.",
            type: "input",
            name: "intGithub",
        },
    ]).then(data => {
        var newIntern = new Intern(data.intName, data.intId, data.intEmail, data.intGithub);
        internArray.push(newIntern);

        if(internInt === 1){
            combinedinfo(newManager,engineerArray ,internArray);
      
        }else{
            createAnIntern(newManager, engineerArray, internInt - 1);
        };

    });
};





function createAManager() {
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
            message: "How many Interns are involved in this team?",
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
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerPhoneNum);
        const engineerInt = parseInt(data.engineerNum);
        const internInt = parseInt(data.internNum);

        createAEngineer(newManager, engineerInt,internInt)

        fs.writeFile("managerinfo.json", JSON.stringify(data, null, '\t'), function (err) {

            if (err) {
                return console.log(err);
            }
        });

    });
};
createAManager();