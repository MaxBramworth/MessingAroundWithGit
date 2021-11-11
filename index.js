const prompt = require("prompt-sync")();

console.log("script runs :)");

let userWants = prompt("what do? ");

switch (userWants){
    case "skwares":
        for (let i = 0; i < 10; i++){
            console.log(i * i);
        }
        break;
    case "ranom numers":
        for (let i = 1; i < 11; i++){
            console.log(Math.floor(i * Math.random() * 15));
        }
        break;
}