const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	let f = client.emojis.find(c => c.name === "zuncheck");
	if(!args[0])
	return message.channel.send(`${f} Please mention someone to kick!`);
	
   	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
	
	if(!member) 
	return message.channel.send(`${f} You can't kill ${args[0]}!`);
	 let teu = client.emojis.find(c => c.name === "teutroll");
	 let ban = client.emojis.find(c => c.name === "ban");
	
   let random = Math.random() * 5 + 1;
   var kill = Math.round(random)

   if (kill === 1) {
     message.channel.send(`⬇ **${member.user.username}** falls in your quarter mile pit. `);
   }

   if (kill === 2) {
     message.channel.send(`🌩 **${member.user.username}** has been striked by a storm.`);
   }

   if (kill === 3) {
     message.channel.send(`🚚 You drive over **${member.user.username}** with your truck.`);
   }

   if (kill === 4) {
     message.channel.send(`🏓 **${member.user.username}** pinged everyone in his server, awch..`);
   }

	 if (kill === 5) {
     message.channel.send(`${teu} Matteu killed **${member.user.username}** because he dint edit at GrowStocks.`);
   }

	 if (kill === 6) {
		 message.channel.send(`${ban} Zevu killed **${member.user.username}** because he repeatedly pinged him.`);
	 }
};
