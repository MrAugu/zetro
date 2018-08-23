const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!args[0])
  return message.channel.send("Please specify a text.")
    const pollmsg = await message.channel.send("Adding reactions..");
    await message.react("👍");
    await message.react("👎");
    await message.react("🤷");
    await pollmsg.edit("Reactions were added!");
    await pollmsg.delete(1000);
return;
}

module.exports.help = {
  name: "poll"
}
