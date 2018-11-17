const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  const statEmbed = new Discord.RichEmbed()
  .setTitle("Stats")
  .setColor("#ce6514")
  .setDescription("These stats are changing pretty  often.")
  .addField("Developer:", `MrAugu#9016`)
  .addField("Total Channels:", `${bot.channels.size}`)
  .addField("Total Servers:", `${bot.guilds.size}`)
  .addField("Uptime:", `${uptime}`)
  .addField("Total Shards:", `0`)
  .addField("Current Shard:", `-`)
  .addField("Version of discord.js", `v11.3.0`)
  .addField("Created At:", `${bot.createdAt}`)
  .setFooter("Powered by MrAugu")
  .setTimestamp();
  message.channel.send(statEmbed);
}
 
module.exports.help = {
  name: "stats"
}
