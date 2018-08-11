const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0]) {
        
        const user = message.guild.members.get(args[0]) || message.member || message.channel;   
        
        const help1Embed = new Discord.RichEmbed()
         .setTitle("You can @mention me for prefix.")
         .setDescription("__**Utility Commands**__:\n**poll** - Makes a poll that users can vote.\n**serverinfo** - Gives details about server.\n**avatar** - Gives you the avatar URL.\n**announce** - Embeds your announcement.\n**whois** - Tells details about a user.\n**servericon** - Displays a link to server icon.\n\n__**Fun Commands**__:\n**8ball** - Ask mystical 8ball.\n**catmeme** - Gives you a rndom cat meme.\n**dogmeme** - Gives you a random dog meme.\n**roll** - Rolls a dice.\n")
         .setFooter("Page 1/4")
         .setTimestamp();

         const help2Embed = new Discord.RichEmbed()
         .setTitle("You can @mention me for prefix.")
         .setDescription("**flipcoin** - Flips a coin.\n**say** - Say message you sayd and delete some evidences.\n**illegal** - Declares thing you say illegal.\n**spin** - Spins a roulette wheel.\n**liedetect** - Activates the lie detector.\n**lovecalc** - Calculates the love between 2 things.\n\n__**General Commands**__:\n**support** - Gives you a link to join my server.\n**ping** - Checks the discord latency.\n**invite** - Gives you the link to invite me.\n**help** - Gives you a detailed list of commnads.\n")
         .setFooter("Page 2/4")
         .setTimestamp();

         const help3Embed = new Discord.RichEmbed()
         .setTitle("You can @mention me for prefix.")
         .setDescription("**about** - Gives you details about bot.\n**uptime** - Gives you the time bot was up.\n**stats** - Gives you details about me.\n\n__**Moderation Commands**__:\n**mute** - Mutes a user.\n**lockdown** - Locks down a channel.\n**unlockdown** - Unlocks a channel from lockdown.\n**clear** - Clear a specifyed amout of messages.\n**unmute** - Unmutes a user.\n**kick** - Kicks a user from server.\n**ban** - Bans a user from server.")
         .setFooter("Page 3/4")
         .setTimestamp();

        const help4Embed = new Discord.RichEmbed()
         .setTitle("You can @mention me for prefix.")
         .setDescription("**warn** - Warns a user.\n\n__**Economy Commands**__:\n**work** - Gives you some money.\n**bal** - Show your balance.\n**register** - Registering you to economy.\n**pay** - Pay a user.\n\n__**Setting Commands**__:\n**setprefix** - Sets a new prefix for server.\n**setlogs** - Sets log channel.\n**settings** - Shows current settings for server.\nSupport Server: https://discord.gg/QGJJBy6\nWebsite: **Comming Soon!**")
         .setFooter("Page 4/4")
         .setTimestamp();
         
         user.send(help1Embed);
         user.send(help2Embed);
         user.send(help3Embed);
         user.send(help4Embed);
        
        message.reply(":white_check_mark: Delivered a list of valid commands right into your DMs.");

    }
   /*const helpEmbed = new Discord.RichEmbed()
   .setColor("0x00AE86")
   .setTitle("For prefix mention me.")
   .setDescription("Here is a list of available commands.")
   .addField("__Economy Commands__", "`work`",`bal`,`register`,`pay`)
   .addField("__Moderation Commands__:", "`mute`,`lockdown`,`unlockdown`,`clear`,`unmute`,`kick`,`ban`,`warn`")
   .addField("__Setting Commands__:", "`setprefix`, `setlogs`,`settings`");
 */
}

module.exports.help = {
  name: "help"
}
