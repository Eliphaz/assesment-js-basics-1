const readline = require("readline");
const figlet = require("figlet");


console.log("welcome to elis password autheticator! 10/10 doctors who reccomend this reccomend using this password authenticator")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("please enter a password... ", function (password) {
    if(password.length >= 10){
        console.log("nice! the password is longer than 10 characters")
    } else if(password.length < 10){
        console.log("password is too short, common among meat based organisms")
    }
    rl.close()

  figlet.text("Dont Hate Authenticate!", function (err, data){
    console.log(data)
   })

  });
