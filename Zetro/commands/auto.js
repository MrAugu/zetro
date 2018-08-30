const Discord = require("discord.js");
const sm = require("string-similarity");
const send = require("quick.hook");

exports.run = async (client, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  
  if(!args[1]) return message.reply(`${f} Please specify a text to match with.`);
   let members = [];
   let indexes = [];
   message.guild.members.forEach(function(member) {
       members.push(member.user.username);
       indexes.push(member.id);
   })
   let match = sm.findBestMatch(args.slice(1).join(' '), members);
   let username = match.bestMatch.target;
   let member = message.guild.members.get(indexes[members.indexOf(username)]);

   message.channel.send(`The best match is **${member.user.username}**!`);
  
};
