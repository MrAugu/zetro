const Discord = require("discord.js");
const sm = require("string-similarity");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply("You need to type some text!");
   let members = [];
   let indexes = [];
   message.guild.members.forEach(function(member) {
       members.push(member.user.username);
       indexes.push(member.id);
   })
   let match = sm.findBestMatch(args.join(' '), members);
   let username = match.bestMatch.target;
   let member = message.guild.members.get(indexes[members.indexOf(username)]);

   message.channel.send(`The best match is **${member.user.username}**!`);
}

module.exports.help = {
  name: "auto"
}
