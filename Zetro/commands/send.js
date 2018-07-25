const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
   let cID = args[0];
   let m = args.slice(1).join(" ");
   client.channels.get(cID).send(m);
}

module.exports.help = {
  name: "send"
}

