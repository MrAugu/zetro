const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let warnuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let warnreason = args.slice(1).join(" ");
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply("You don`t have permission to do this.");
    if(warnuser.hasPermission(`ADMINISTRATOR`)) return message.reply("You don`t have permission to warn that user.");
    if(!warnreason) return message.channel.send("Please specify a reason.")
    message.channel.send(`${warnuser} has been warned for ${warnreason}`);
    try {
      await warnuser.send(`Hey, you've been warned in ${message.guild.name} for ${warnreason}`);
   } catch(err) {
     message.channel.send("We've tryed to send him a DM but his DMs are locked up.");
   }
    let warnchannel = message.guild.channels.find(`name`, "logs");
    let warnEmbed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle("#Action:")
  .setDescription("Warn")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${warnreason}`)
  .addField("Member Warned:", `${warnuser}`);
  warnchannel.send(warnEmbed);
  }
   
  module.exports.help = {
    name: "warn"
  }
