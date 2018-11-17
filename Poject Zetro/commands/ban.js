const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(`BAN_MEMBERS`))
  return message.reply("You don`t have permission to do this!");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(message.member.id === member.id) return message.channel.send("Sorry but i can't allow self harm.")
  if(!member)
  return message.channel.send('Please mention a valid user!');
  if(!member.bannable)
  return message.channel.send('This member can`t be banned!');
  let reason = args.slice(1).join(' ')
  if(!reason) return message.channel.send("Please provide a reason.")
  await member.ban(reason)
  message.channel.send(`:white_check_mark: **${member.user.tag}** has been succefully banned.`);
  let banchannel = message.guild.channels.find(`name`, "logs");
  let banEmbed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle("#Action:")
  .setDescription("Ban")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`)
  .addField("Member Banned:", `${member}`);
  banchannel.send(banEmbed);
}
 
module.exports.help = {
  name: "ban"
}
