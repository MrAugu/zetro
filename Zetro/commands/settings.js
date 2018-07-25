const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: "%(default)"
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;

    let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

    if(!logs[message.guild.id]) {
    logs[message.guild.id] = {
      logs: "logs(default)"
      };
    }
    let log = logs[message.guild.id].logs;

    let option = JSON.parse(fs.readFileSync("./autoinvlink.json", "utf8"));

    if(!option[message.guild.id]) {
      option[message.guild.id] = {
        option: "OFF"
      };
    }
    
    let btw = option[message.guild.id].option;

    let options = JSON.parse(fs.readFileSync("./automodlink.json", "utf8"));

    if(!options[message.guild.id]) {
      options[message.guild.id] = {
        options: "OFF"
      };
    }

    const btws = options[message.guild.id].options;

    const settingsEmbed = new Discord.RichEmbed()
    .setTitle("These are settings for this server.")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Any of these can be changed with commands from settings category.`)
    .addField("Prefix:", `${prefix}`)
    .addField("Mod Log Channel Name:", `${log}`)
    .addField("Automod: Anti-Link", `${btws}`)
    .addField("Automod: Anti-Invite", `${btw}`)
    .setTimestamp();
    message.channel.send(settingsEmbed);
}

module.exports.help = {
  name: "settings"
}