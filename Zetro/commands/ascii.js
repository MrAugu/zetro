const Discord = require("discord.js");
var figlet = require("figlet");

exports.run = async (client, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  
  var maxLen = 14;

    if(args.join(' ').length > maxLen) return message.channel.send(`${f} Only 14 characters are admitted!`);

    if(!args[0]) return message.channel.send(`${f} Please specify a test to asciify!`);

    figlet(`${args.slice(1).join(' ')}`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            return;
        }

        message.channel.send(`${data}`, {code: 'AsciiArt'});
    });
  
};
