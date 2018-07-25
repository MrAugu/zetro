const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  const statsEmbed = new Discord.RichEmbed()
  .setTitle("Stats")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#fe6519")
  .setDescription("These stats are changing pretty often.")
  .addField("Developer:", `MrAugu#9016`)
  .addField("Total Channels:", `${client.channels.size}`)
  .addField("Total Servers:", `${client.guilds.size}`)
  .addField("Uptime:", `${uptime}`)
  .addField("Total Shards:", `0`)
  .addField("Current Shard:", `-`)
  .addField("Version of discord.js", `v11.3.0`)
  .addField("Created At:", `${client.user.createdAt}`)
  .setFooter("Powered by MrAugu")
  .setTimestamp();
  message.channel.send(statsEmbed);
  return;
}
 
module.exports.help = {
  name: "stats"
}
