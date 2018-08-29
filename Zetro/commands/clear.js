const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck");
    let s = client.emojis.find(c => c.name === "zcheck");
    
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`${f} You do not have permission to do so!`);
    
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount)
    return message.channel.send(`${f} Please specify an amount of messages to delete.`);
    if(deleteCount > 100)
    return message.channel.send(`${f} Please specify a smaller amount.`);
    if(deleteCount < 1)
    return message.channel.send(`${f} Please specify a bigger ammount.`);
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    
    const deletemessage = await message.channel.send(`${f} **${deleteCount}** messages has been deleted!`);
    deletemessage.delete(5000);
};
