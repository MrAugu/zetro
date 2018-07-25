const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (client, message, args) => {
  if(!coins[message.author.id]){
    message.channel.send("Please register by using `register` command.");
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = coinAmt;

  if(coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  }

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  const responses = [
    `You worked as a master chef and earn ${coinAmt}.`, `You worked as a toy tester for a 5 year old kid and earn ${coinAmt}.`
  ]

  const replys = responses[Math.floor(Math.random() * responses.length)];

  message.channel.send(replys);
}

module.exports.help = {
  name: "work"
}