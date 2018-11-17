const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const responses = [
    'Yes!', 'No!', 'Maybe..', 'Obviously.', 'Nah!', 'Ask me later!', 'You know the best!', 'Probably..yes', 'Probably..no', 'Ofc!', 'Probably...'
 ]
 if(!args[0]) return message.channel.send("Please specify a text.");
  message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}

module.exports.help = {
  name: "8ball"
}
