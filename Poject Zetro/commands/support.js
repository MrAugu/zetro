const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("My support server is: https://discord.gg/QGJJBy6");
}
 
module.exports.help = {
  name: "support"
}
