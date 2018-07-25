const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You don't have permission to do that.");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
    return message.channel.send("Please mention a valid user.");
    let reason = args.slice(1).join(" ");
    if(!reason)
    return message.channel.send("Please specify a reason.");
    if(member.hasPermission("MANAGE_GUILD")) 
    return message.reply("This user can't be warned, sorry.");
    message.channel.send(`**${member.user.tag}** has been warned for ${reason}!`);
    try {
        await member.send(`You were warned in **${message.guild.name}** for ${reason}.`);
     } catch(err) {
   
     }
     let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

     if(!logs[message.guild.id]) {
       logs[message.guild.id] = {
         logs: "logs"
       };
     }

     let log = logs[message.guild.id].logs;

     let lc = message.guild.channels.find(`name`, log);
      lc.send(`:triangular_flag_on_post: **${message.author.tag}** warned ${member.user.tag}(ID:${member.id})\n**Reason**: ${reason}`);
return;


}
module.exports.help = {
  name: "warn"
}
