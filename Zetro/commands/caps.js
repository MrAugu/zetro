const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = async (client, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  if (!args[0]) 
  return message.channel.send(`${f} Please specify a senence to random capitalise.`);
    message.channel.send(args.map(randomizeCase).join(':clap:'));
};
