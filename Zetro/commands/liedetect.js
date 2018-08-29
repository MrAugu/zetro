const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck");
    
    if(!args[0])
    return message.channel.send(`${f} Please specify a text.`);
    
  const result = ["Thats completly false!", "Thats completly true!"]
  
  message.channel.send(`${result[Math.floor(Math.random() * result.length)]}`);
};
