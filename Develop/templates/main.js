const fs = require('fs');
const newManager = require('./manager');
const newEngineer = require('./engineer');
const newIntern = require('./intern');


function createHTML(inputs) {
    var websiteHTML = 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our Team Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9b3dd0e6ff.js" crossorigin="anonymous"></script>
</head>

<body class="bg-dark">
    <div class="jumbotron jumbotron-fluid shadow bg-primary">
        <div class="container">
            <h1 class="display-2 text-center mb-3"><ins>All Star Dev Team</ins></h1>
            <blockquote class="blockquote">
                <p class="font-weight-bold text-center">"The strength of the team is each individual member. The
                    strength of each member is the team." --Phil Jackson</p>
            </blockquote>
        </div>
    </div>
    <div class="row justify-content-center" id="manager">
    ${createEmployeeHTML(inputs)}  
    </div>
    <div class="row justify-content-center" id="engineer">
    ${createEmployeeHTML(inputs)}  
    </div>
    <div class="row justify-content-center" id="intern">
    ${createEmployeeHTML(inputs)}  
    </div>
    </div>
    </div>
</body>
</html>`


fs.writeFile("./output/index.html", content, function (err) {
        if (err) throw err;
    });
}

module.exports = createHTML
