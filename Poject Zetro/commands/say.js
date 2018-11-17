const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let saymsg = args.slice(0).join(" ");
  const sayEmbed = new Discord.RichEmbed()
  .setTitle("Saying:")
  .setColor("#e00ddc")
  .setDescription(`${saymsg}`)
  .setFooter(`Message by ${message.author.tag}`);
  message.channel.send(sayEmbed);
}

module.exports.help = {
  name: "say"
}
