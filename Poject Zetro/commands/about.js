const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Zetro **v1.0.4** is a multipurpose bot onine 24/7, a wide range of commands a performance.\n:ballot_box_with_check: Secure\n:ballot_box_with_check: Powerfull\n:ballot_box_with_check: Esthetic\n:ballot_box_with_check: Easy to use\nIm in ${bot.guilds.size} servers!\nIf you found any bug or want to be up to date with everything regarding bot, join our support server, or invite bot to your server.\n**Support Server:** https://discord.gg/QGJJBy6\n**Invite Me:** https://discordbots.org/bot/447976703046844427`);
}
 
module.exports.help = {
  name: "about"
}
