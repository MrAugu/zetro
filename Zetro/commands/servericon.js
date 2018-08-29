const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let sicon = message.guild.iconURL;
    message.channel.send(`This server's icon is: ${sicon}`);
};
