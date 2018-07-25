const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;
  if(!coins[target.id]){
    message.channel.send("Please register by using `register` command.");
  }
   let nrcoins = coins[target.id].coins;
  const balEmbed = new Discord.RichEmbed()
  .setAuthor(`${target.tag}`, target.displayAvatarURL)
  .setTitle(`⚖ | ${target}'s balance is:`)
  .setColor("#e0e23d")
  .setDescription(`${nrcoins}💳`)
  .setFooter("Powered by Z-Banking")
  .setTimestamp();
  message.channel.send(balEmbed)
}

module.exports.help = {
  name: "bal"
}