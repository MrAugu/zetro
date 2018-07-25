const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const coinfaces = [
  "Head!", "Tail!"
 ]
 message.channel.send(`The face of coin signs ${coinfaces[Math.floor(Math.random() * coinfaces.length)]}`);
return;
}
 
module.exports.help = {
  name: "flipcoin"
}
