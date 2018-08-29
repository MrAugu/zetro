const config = require("../config.json");

exports.run = async (client) => {
  let prefix = config.prefix;
 setInterval(() => {
	  let status = [`${client.guilds.size} servers | ${prefix}help`,`${client.users.size} users | ${prefix}help`];
    let curStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(`${curStatus}`, { type: 'WATCHING' });
 }, 5000);

 await client.user.setStatus("online");
 console.log(`Succefully Connected to ${client.guilds.size} servers, ${client.channels.size} channels and ${client.users.size} users!`);
};
