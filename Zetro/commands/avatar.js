const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;
    message.channel.send({files: [
{
attachment: target.displayAvatarURL,
name: "avatar.png"

}
]});
    return;
}
 
module.exports.help = {
  name: "avatar"
}
