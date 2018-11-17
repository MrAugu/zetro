const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(`The roulette spun ${Math.floor(Math.random() * 36)}.`);
}
 
module.exports.help = {
  name: "spin"
}
