const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const coinfaces = ["Head!", "Tail!"]
 message.channel.send(`The face of coin signs ${coinfaces[Math.floor(Math.random() * coinfaces.length)]}`);
  
};
