const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const coinfaces = [
  "Head!", "Tail!"
 ]
 message.channel.send(`The face of coin signs ${coinfaces[Math.floor(Math.random() * coinfaces.length)]}`);

}
 
module.exports.help = {
  name: "flipcoin"
}
