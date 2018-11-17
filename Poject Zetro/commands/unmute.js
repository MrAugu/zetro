const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do this.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Please mention a valid user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You don`t have permission to do this!");
  let reason = args.slice(1).join(" ");
  if(!reason) return message.reply("Please specify a reason.");
  let muterole = message.guild.roles.find(`name`, "Z-Muted"); 
    await(tomute.removeRole(muterole.id));
  let mutechannel = message.guild.channels.find(`name`, "logs");
  let muteEmbed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle("#Action:")
  .setDescription("Unmute")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`)
  .addField("Member Unmuted:", `${tomute}`);
  mutechannel.send(muteEmbed);
  message.channel.send(`${tomute} has been unmuted succefuly.`);

}

module.exports.help = {
  name: "unmute"
}
