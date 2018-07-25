const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");
const cd = require("../cooldown.json");

module.exports.run = async (client, message, args) => {
    if(cd[message.author.id]) {
        message.channel.send("You are still on cooldown, please try again later.");
        return;
    }

    if(!coins[message.author.id]){
        message.channel.send("Please register by using `register` command.");
      }
    
      let coinAmt = Math.floor(Math.random() * 2000) + 1;
      let baseAmt = coinAmt;
    
      if(coinAmt === baseAmt) {
        coins[message.author.id] = {
          coins: coins[message.author.id].coins + coinAmt
        };
      }
    
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });

    if(!cd[message.author.id]){
      cd[message.author.id] = {
        cd: "true"
    };
  }

    fs.writeFile("./cooldown.json", JSON.stringify(cd), (err) => {
    if (err) console.log(err)
  });
    
  message.channel.send(`You succefully gained your daily bonus,${coinAmt}💳, you can use it again in 24hrs.`);
}

module.exports.help = {
  name: "daily"
}

