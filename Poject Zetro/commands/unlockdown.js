const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply("You don't have permission to do this.");
    let reason = args.slice(0).join(" ");
  if(!reason) return message.reply("Please specify a reason.");
  message.channel.overwritePermissions(message.guild.id, {
    SEND_MESSAGES: null
  }).then(() => {
  message.channel.send(`:white_check_mark: Lockdown has been lifted succefully!`);
  }).catch(error => {
    console.log(error);
  });
  let logs = message.guild.channels.find(`name`, "logs");
  let lockEmbed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle("#Action:")
  .setDescription("Unlockdown")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`);
  logs.send(lockEmbed);
}
 
module.exports.help = {
  name: "unlockdown"
}
