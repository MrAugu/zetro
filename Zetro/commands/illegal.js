const Discord = require("discord.js");

exports.run = async (client, message, args) => {
     let f = client.emojis.find(c => c.name === "zuncheck");
    
    if(!args[1])
    return message.channel.send(`{f} Please specify a text!`);
    let ilegalstuff = args.slice(1).join(" ");
    message.delete();
    let ilegalEmbed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("__Breaking News:__")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Tuday at 9:00 Donald Tump made illegal ${ilegalstuff}`)
    .setThumbnail("https://imgur.com/EbsemRd")
    .setTimestamp();
    message.channel.send(ilegalEmbed);

};
