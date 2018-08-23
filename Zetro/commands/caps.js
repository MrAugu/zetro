const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send("Please specify a sentence to random capitalize.")
    message.channel.send(args.map(randomizeCase).join(':clap:'));
}

module.exports.help = {
  name: "caps"
}
