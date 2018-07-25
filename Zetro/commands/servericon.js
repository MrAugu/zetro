const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let sicon = message.guild.iconURL;
    message.channel.send(`This server's icon is: ${sicon}`);
    return;
} 

module.exports.help = {
  name: "servericon"
}
