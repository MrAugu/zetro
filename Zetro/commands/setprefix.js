const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  /*if(!message.member.hasPermission("MANAGE_GUILD"))
  return message.channel.send("You don't have permission to do that.");
  if(!args[0])
  return message.channel.send("Please provide a prefix.");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  });

    const prefixEmbed = new Discord.RichEmbed()
    .setTitle("Prefix set!")
    .setColor("#00FF00")
    .setDescription(`The prefix for this server has been set "${args[0]}".`)
    .addField(`Pro Tip:`, "If you forget the prefix, you can @mention me at anytime.")
    .setTimestamp();
    message.channel.send(prefixEmbed);
    return;*/
}

module.exports.help = {
  name: "setprefix"
}
