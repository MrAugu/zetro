const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(`MANAGE_MESSAGES`))
  return message.reply("You don`t have permission to do this!");
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount)
  return message.channel.send('Please specify a amount of messages to delete.');
  if(deleteCount < 2)
  return message.channel.send('Please specify a bigger number of messages to delete.');
  if(deleteCount > 100)
  return message.channel.send("Please specify a smaler number of messages to delete.");
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
   const delmsg = await message.channel.send(`:white_check_mark: **${deleteCount}** mesages were cleared succefully!`);
  delmsg.delete(3000);
  let clearchannel = message.guild.channels.find(`name`, "logs");
  const clearEmbed = new Discord.RichEmbed()
  .setColor("#0000e6")
  .setTitle("#Action")
  .setDescription("Message Deletion")
  .addField("Moderator", `${message.author.tag}`)
  .addField("Messages Deleted", `${deleteCount}`);
  clearchannel.send(clearEmbed);
}
 
module.exports.help = {
  name: "clear"
}
