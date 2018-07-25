const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0])
    return message.channel.send("Please specify a text.");
    let text = args.slice(0).join(" ");
    message.channel.send(`${text}\n/Sayd by **${message.author.tag}**/`);
    return;

}

module.exports.help = {
  name: "say"
}
