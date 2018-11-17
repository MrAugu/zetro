const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("My invite link is: https://discordbots.org/bot/447976703046844427 \nMy support server is: https://discord.gg/QGJJBy6");
}
 
module.exports.help = {
  name: "invite"
}
