const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send("You don't have permission to do that!");
    let reason = args.slice(0).join(" ");
    if(!reason)
    return message.channel.send("Please specify a reason!");
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      }).then(() => {
      message.channel.send(`The channel is now under lockdown.`);
      }).catch(error => {
        console.log(error);
      });

      let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

      if(!logs[message.guild.id]) {
        logs[message.guild.id] = {
          logs: "logs"
        };
      }

      let log = logs[message.guild.id].logs;

      let lc = message.guild.channels.find(`name`, log);

     lc.send(`:no_entry: **${message.author.tag}** locked down <#${message.channel.id}>.\n**Channel**: <#${message.channel.id}>\n**Reason**: ${reason}`);
return;
}

module.exports.help = {
  name: "lockdown"
}
