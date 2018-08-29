const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  await message.react("👍");
  message.channel.send("**Support Server**: https://discord.gg/QGJJBy6");
};
