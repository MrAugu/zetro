const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD"))
  return message.channel.send("You don't have permission to do that.");
  if(!args[0])
  return message.channel.send("Please provide a channel.");

  let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

  logs[message.guild.id] = {
    logs: args[0]
  };

  fs.writeFile("./logs.json", JSON.stringify(logs), (err) => {
    if(err) console.log(err)
  });

    const logsEmbed = new Discord.RichEmbed()
    .setTitle("Channel Set!")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#0000FF")
    .setDescription(`Mod Log channel has been set "${args[0]}".`)
    .addField("Pro Tip:", `To keep logs of moderation commands wich provides you alot information regarding server, have a channel exactly named "${args[0]}"`)
    .setTimestamp();
    message.channel.send(logsEmbed);
    return;
}

module.exports.help = {
  name: "setlogs"
}
