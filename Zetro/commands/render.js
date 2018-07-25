const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let rendered = args[0];
    const renderEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("The world has been rendered!")
    .setDescription("If there isn't a actual render for your world, i wont display any image.")
    .setImage(`https://growtopiagame.com/worlds/${rendered}.png`)
    .setTimestamp();
    message.channel.send(renderEmbed);
}

module.exports.help = {
  name: "render"
}
