const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.channel.send(`Dice landed on **${Math.floor(Math.random() * 6) + 1}**!`);
};
