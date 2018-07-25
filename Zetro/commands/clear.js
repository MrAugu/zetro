const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You don't have permission to do that!");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount)
    return message.channel.send("Please specify a amount of messages to delete.");
    if(deleteCount > 100)
    return message.channel.send("Please specify a smaller amount.");
    if(deleteCount < 1)
    return message.channel.send("Please specify a bigger ammount.");
    const fetched= await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    const deletemessage = await message.channel.send(`**${deleteCount}** messages has been deleted!`);
    deletemessage.delete(5000);

    let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

    if(!logs[message.guild.id]) {
      logs[message.guild.id] = {
        logs: "logs"
      };
    }

    let log = logs[message.guild.id].logs;

    let lc = message.guild.channels.find(`id`, `${log}`);
    if(!lc) return;

   lc.send(`:wastebasket: **${message.author.tag}** deleted ${deleteCount} messages.\n**Channel:** <#${message.channel.id}>\n**ChannelID:** ${message.channel.id}`);
   return;

}

module.exports.help = {
  name: "clear"
}
