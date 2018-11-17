const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Analizing Latency..");
  m.edit(`Pong!\nLatency is **${m.createdTimestamp - message.createdTimestamp}** Miliseconds.\nAPI Latency is **${Math.round(bot.ping)}** Miliseconds`).catch(O_o=>{});
}
 
module.exports.help = {
  name: "ping"
}
