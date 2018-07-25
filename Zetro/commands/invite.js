const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.react("👍");
  message.channel.send("**Invite me**: https://discordbots.org/bot/447976703046844427 \n**Join my Support Server**: https://discord.gg/QGJJBy6");
  return;
}
 
module.exports.help = {
  name: "invite"
}
