const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.channel.send("**Support Server**: https://discord.gg/QGJJBy6");
  return;
}
 
module.exports.help = {
  name: "support"
}
