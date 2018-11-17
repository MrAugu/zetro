const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("Please specify a text.");
  message.react("👍");
  message.react("👎");
  message.react("🤷");
  const pollmsg = await message.channel.send("Poll Initiated!");
  pollmsg.delete(1000);
}
module.exports.help = {
  name: "poll"
}
