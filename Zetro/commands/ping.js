const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const m = await message.channel.send("Checking Latency...");
  m.edit(`:ping_pong:\nDuration: **${m.createdTimestamp - message.createdTimestamp}**MS.\nWebsocket Latency: **${Math.round(client.ping)}** Miliseconds`).catch(O_o=>{});
};
