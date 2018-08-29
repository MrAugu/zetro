const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  let s = client.emojis.find(c => c.name === "zcheck");
  
  if(!args[0])
  return message.channel.send(`${f} Please specify a text!`)
    const pollmsg = await message.channel.send("Adding reactions..");
    await message.react("👍");
    await message.react("👎");
    await message.react("🤷");
    await pollmsg.edit(`${s} Reactions were added!`);
    await pollmsg.delete(2000);
};
