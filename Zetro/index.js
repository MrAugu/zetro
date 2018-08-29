const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const blacklist = require('./blacklist.json')

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0 || blacklist.includes(message.author.id)) return;

  let args = messageArray.slice(1);

  const command = message.content.split(" ")[0].toLowerCase().slice(config.prefix.length);

    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
});

client.login(config.token);
