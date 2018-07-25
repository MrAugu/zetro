const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!args[0])
  return message.channel.send("Please specify a text.")
    const pollmsg = await message.channel.send("Adding reactions..");
    message.react("👍");
    message.react("👎");
    message.react("🤷");
    pollmsg.edit("Reactions were added!");
    pollmsg.delete(2000);
return;
}

module.exports.help = {
  name: "poll"
}
