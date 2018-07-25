const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0])
    return message.channel.send("Please specify a text!");
    let ilegalstuff = args.slice(0).join(" ");
    message.delete();
    let ilegalEmbed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("__Breaking News:__")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Tuday at 9:00 Donald Tump made illegal ${ilegalstuff}`)
    .setThumbnail("https://imgur.com/EbsemRd")
    .setTimestamp();
    message.channel.send(ilegalEmbed);
    return;

}

module.exports.help = {
  name: "illegal"
}
