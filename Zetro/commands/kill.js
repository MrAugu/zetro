const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	   if(!args[0]) return message.channel.send("Mention someone to kill!`! kick <user>`");
   let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	 if(!member) return message.channel.send(`You can't kill ${args[0]}!`);
	 let teu = client.emojis.find("name", `teutroll`);
	 let ban = client.emojis.find("name", `ban`);
   let random = Math.random() * 5 + 1;
   var kill = Math.round(random)

   if (kill === 1) {
     message.channel.send(`⬇ **${member.user.username}** falls in your quarter mile pit. `);
   }

   if (kill === 2) {
     message.channel.send(`🦊 **${member.user.username}** suffocates of heat in your fursuit.`);
   }

   if (kill === 3) {
     message.channel.send(`🚚 You drive over **${member.user.username}** with your Ford truck.`);
   }

   if (kill === 4) {
     message.channel.send(`🍔 You feed **${member.user.username}** too much trans fat, until their arteries were clogged.`);
   }

	 if (kill === 5) {
     message.channel.send(`${teu} Matteu killed **${member.user.username}** because he dint edit at GrowStocks.`);
   }

	 if (kill === 6) {
		 message.channel.send(`${ban} Zevu killed **${member.user.username}** because he repeatedly pinged him.`);
	 }
}

module.exports.help = {
  name: "kill"
}
