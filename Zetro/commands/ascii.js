const Discord = require("discord.js");
var figlet = require("figlet");

module.exports.run = async (client, message, args) => {
  var maxLen = 14;

    if(args.join(' ').length > maxLen) return message.channel.send('Only 14 characters admitted!');

    if(!args[0]) return message.channel.send('Please specify a test to asciify!');

    figlet(`${args.join(' ')}`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            return;
        }

        message.channel.send(`${data}`, {code: 'AsciiArt'});
    });
}

module.exports.help = {
  name: "ascii"
}
