const Discord = require("discord.js");

exports.run = async (client, message, args) => {
     let f = client.emojis.find(c => c.name === "zuncheck");
    if(!args[1])
    return message.channel.send(`${f} Please specify a text.`);
  const responses = [
      " Yes!", "No!", "Maybe.", "Probably...", "Ask me later!"
  ]
  
  message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
     
};
