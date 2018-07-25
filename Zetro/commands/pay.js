const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  if(!coins[message.author.id]){
    return message.channel.send("You don't have any credits, sorry! First you need to register with `register` command.");
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    message.channel.send(`${pUser}, please register yourself with "register", first.`);
    return;
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;
  const creditstogive = parseInt(args[0]);

  if(sCoins < creditstogive) { 
  return message.channel.send(`You don't have enought credits to pay ${pUser.user.tag}.`);
  }

  coins[message.author.id] = {
    coins: sCoins - creditstogive
  };

  coins[pUser.id] = {
    coins: pCoins + creditstogive
  };

  message.channel.send(`${message.author.tag} has given ${pUser.user.tag} ${creditstogive} credits.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}