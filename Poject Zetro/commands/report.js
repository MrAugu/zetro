const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let link = args.slice(0).join(" ");
  if(!link) return message.reply("Please specify link you want to report for phising.");
  bot.channels.get('463291611183448064').send(`**Phishing Link:**\n${link}\n**Author:**\n${message.author.tag}\n**In:**\n${message.guild}`);
  message.channel.send("Thank you, the link has been delivered, now is on waiting queue.");

}
 
module.exports.help = {
  name: "report"
}
