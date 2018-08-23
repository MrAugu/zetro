const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0])
    return message.channel.send("Please specify a text.");
  const result = [
      "Thats completly false!", "Thats really true!"
  ]
  message.channel.send(`${result[Math.floor(Math.random() * result.length)]}`);
}

module.exports.help = {
  name: "liedetect"
}
