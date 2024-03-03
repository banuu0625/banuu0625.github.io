import { exec } from 'child_process';


const person = {
    email: document.getElementById("input1"),
    password: document.getElementById("input2"),

}


function sendconf(){
    person.email.value
}

function emailsend(){

    const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('python .\\email.py bombaclat', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);

}
