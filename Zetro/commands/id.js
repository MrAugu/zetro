const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	let target = message.mentions.users.first() || message.author;
	message.channel.send(`**${target.username}**'s id is: ${target.id}`);
}

module.exports.help = {
  name: "id"
}
