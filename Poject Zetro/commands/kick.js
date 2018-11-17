const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply("You don`t have permission to do this!");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(message.member.id === member.id) return message.channel.send("Sorry but i can't allow self-harm.");
  if(!member)
  return message.channel.send('Please mention a valid user!');
  if(!member.kickable)
  return message.channel.send('This member can`t be kicked!');
  let reason = args.slice(1).join(' ')
  if(!reason) return message.channel.send("Please specify a reason.")
  await member.kick(reason)
  message.channel.send(`:white_check_mark: **${member.user.tag}** has been succefully kicked.`);
  let kickchannel = message.guild.channels.find(`name`, "logs");
  const kickEmbed = new Discord.RichEmbed()
  .setColor("#ff1a1a")
  .setTitle("#Action:")
  .setDescription("Kick")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`)
  .addField("Member Kicked:", `${member}`);
  kickchannel.send(kickEmbed)
}
 
module.exports.help = {
  name: "kick"
}
