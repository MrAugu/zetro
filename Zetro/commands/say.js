const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck");
    
    if(!args[0])
    return message.channel.send(`${f} Please specify a text.`);
    let text = args.slice(0).join(" ");
    message.channel.send(`${text}\n\nThis message has been sayd by ${message.author.tag}!`);
    await message.delete();
}
