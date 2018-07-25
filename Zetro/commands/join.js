const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  }

module.exports.help = {
  name: "join"
}
