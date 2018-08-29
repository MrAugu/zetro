const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let comment = ["They won't be ever together!", "There's a small chance, but I'm not sure..", "I see a good future of them, but only if they say their feeling each other!", "Damn, there's a huge possibility!", "They are such a perfect couple"];
	let percent = Math.floor(Math.random() * 101);
	var point;
	if(percent <= 10) point = 0;
	else if(percent <= 25 && percent > 10) point = 1;
	else if(percent <= 50 && percent > 25) point = 2;
	else if(percent <= 75 && percent > 50) point = 3;
	else if(percent <= 100 && percent > 75) point = 4;
		
	let input = message.content + " ";
	let clean = input.slice(input.indexOf(" ") + 1, input.length - 1).split("&");
	if(clean.length == 3) message.channel.send("Sorry, but we can't ship love triangle!");
	else if(clean.length <= 1) message.channel.send("Use this command to calculate the love of the best ships ever!");
	else if(clean.length > 3) message.channel.send("We can only calculate loves between two peoples!");
	else if(clean.length == 2) message.channel.send(`The love calculator just calculated that their love is about ${percent}% ${comment[point]}`);
};
