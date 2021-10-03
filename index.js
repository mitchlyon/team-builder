const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamArr = [];

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineers name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please provide a name for the engineer!"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineers ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an id number!"
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineers github username?",
            validate: githubInput => {
                if (githubInput !== "") {
                    return true;
                } else {
                    return "Please enter a github username!"
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineers email?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please provide an email for the engineer!"
                }
            }
        },
    ]).then(answer => {
        let engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
        teamArr.push(engineer);
        createTeam();
    })
};

function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the interns name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please provide a name for the engineer!"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the interns ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an id number!"
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the interns school name?",
            validate: schoolInput => {
                if (schoolInput !== "") {
                    return true;
                } else {
                    return "Please enter a school name!"
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the interns email?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please provide an email for the engineer!"
                }
            }
        },
    ]).then(answer => {
        let intern = new Intern(answer.name, answer.id, answer.email, "Intern", answer.school);
        teamArr.push(intern);
        createTeam();
    })
};

function addManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the managers name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please provide a name for the manager!"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the managers ID number?",
            validate: answer => {
                if (answer !== null) {
                    return true;
                } else {
                    return "Please enter an id number!"
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers office number?",
            validate: officeNumberInput => {
                if (officeNumberInput !== "") {
                    return true;
                } else {
                    return "Please enter an office number!"
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the managers email?",
            validate: emailInput => {
                if (emailInput !== "") {
                    return true;
                } else {
                    return "Please provide an email for the manager!"
                }
            }
        },
    ]).then(answer => {
        let manager = new Manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
        teamArr.push(manager);
        createTeam();
    })
};

// const writeToFile = (data) => {
//     const generatedHTML = generateHTML(data);
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', generatedHTML, err => {
//             if (err) {
//                 reject(err);
//             }
//             resolve({
//                 ok: true,
//                 messsage: "Page generated!"
//             });
//         });
//     });
// };

const writeToFile = data => {
    const generatedHTML = generateHTML(data);
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatedHTML, err => {
            if (err) {
                reject(err);
            }

            resolve({
                ok: true,
                message: 'Page generated!'
            });
        });
    });
};

function teamArrToHTML() {
    const cardArr = teamArr.map(o => {
        switch (o.role) {
            case 'Manager':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='manager-card'>
                            <div class='card-header'> 
                                <h2><i class="fas fa-mug-hot"></i> Manager</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class="list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class="list-group-item">Id: ${o.getId()}</li>
                                <li class="list-group-item">Email: <a class="link" href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class="list-group-item">OfficeNumber: ${o.getOffice()}</li>
                            </ul>
                        </div>
                    </div> 
                </div>
                `

            case 'Engineer':
                return `
                <div class="col-md=6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='engineer-card'>
                            <div class='card-header'>
                                <h2><i class="fas fa-glasses"></i> Engineer</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class="list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class="list-group-item">Id: ${o.getId()}</li>
                                <li class="list-group-item">Email: <a class="link" href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class="list-group-item">Github: <a class="link" href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                `

            case 'Intern':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='intern-card'>
                            <div class='card-header'>
                                <h2><i class="fas fa-user-graduate"></i> Intern</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class="list-group-item"><h3>Name: ${o.getName()}<h3></li>
                                <li class="list-group-item">Id: ${o.getId()}</li>
                                <li class="list-group-item">Email: <a class="link" href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class="list-group-item">School: ${o.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            default:
                console.log('cardArr finished?')
                return results
        }
    });
    return cardArr;
}

const generateHTML = () => {
    const results = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./styles.css" />
      <title>Team Builder</title>
    </head>
    
    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>
        <main class="container my-5">
            <div class="row">
                ${teamArrToHTML().join('')}
            </div>
        </main>
    </body>
    </html>
    `;

    return results;
}


function createTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "None"
            ]
        }
    ]).then(answer => {
        switch (answer.role) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "Manager":
                addManager();
                break;

            default:
                console.log(teamArr);
                writeToFile(teamArr);
        };
    });

}

createTeam();

