const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");

module.exports.run = async (client, message, args) => {
  let target = message.mentions.users.first() || message.author;

  if(coins[target.id]){
    message.channel.send("You are alerdy registered, this action would reset you money to 0.");
  }

  else if(!coins[target.id]){
    coins[target.id] = {
      coins: 0
    };
  }

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  message.channel.send("Congratulation, you now have an annount at Z-Banking.");

}
module.exports.help = {
  name: "register"
}
