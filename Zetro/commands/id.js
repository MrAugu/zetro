const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	let target = message.mentions.users.first() || message.author;
	message.channel.send(`**${target.username}**'s id is: ${target.id}`);
};
