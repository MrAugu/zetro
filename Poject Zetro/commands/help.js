const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(args[0] == "8ball"){
    message.reply("Usage: `%8ball [YOUR TEXT]`\nDescription: Gives you a random response to your text.\nExample: `%8ball Are you there?`");
    return;
  }
   if(args[0] == "about"){
    message.reply("Usage: `%about`\nDescription: Tells you some informations regarding bot.\nExample: `%about`");
    return;
  }
   if(args[0] == "avatar"){
    message.reply("Usage: `%avatar`\nDescription: Send the link of command invocation message's author.\nExample: `%avatar`");
    return;
  }
   if(args[0] == "ban"){
    message.reply("Usage: `%ban <user> <reason>`\nDescription: Bans a user from your discord server.\nRequire Permission: `Ban Members`\nExample: `%ban @User Spamming!`");
    return;
  }
   if(args[0] == "clear"){
    message.reply("Usage: `%clear <number>`\nDescription: Clears a number of messages, bigger than 1 and lesser than 101.\nRequire Permission: `Manage Messages`\nExample: `%clear 10`");
    return;
  }
   if(args[0] == "flipcoin"){
    message.reply("Usage: `%flipcoin`\nDescription: Flips a coin.\nExample: `%flipcoin`");
    return;
  }
   if(args[0] == "help"){
    message.reply("Usage: `%help\nDescription: Sends a list of available commands.\nExample: `%help`");
    return;
  }
   if(args[0] == "ilegal"){
    message.reply("Usage: `%ilegal [your text]`\nDescription: Sends a braking news message with you text and trump..\nExample: `%ilegal Soda`");
    return;
  }
   if(args[0] == "invite"){
    message.reply("Usage: `%invite`\nDescription: Send the link to invite Zetro to your server.\nExample: `%invite`");
    return;
  }
   if(args[0] == "kick"){
    message.reply("Usage: `%kick <user> <reason>`\nDescription: Kicks a user out of your server.\nRequire Permission: `Kick Members`\nExample: `%kick @User Swearing!`");
    return;
  }
   if(args[0] == "lockdown"){
    message.reply("Usage: `%lockdown <reason>\nDescription: Remove permission for most users to send messages in the channel.\nRequire Permission: `Manage Server`\nExample: `%lockdown Drama!`");
    return;
  }
   if(args[0] == "meme"){
    message.reply("Usage: `%lockdown <reason>\nDescription: Remove permission for most users to send messages in the channel.\nRequire Permission: `Manage Server`\nExample: `%lockdown Drama!`");
    return;
  }
   if(args[0] == "mute"){
    message.reply("Usage: `%mute <user> <reason>`\nDescription: Mutes a user.\nRequire permission: `Manage Messages`\nExample: `%mute @User Spamming!`");
    return;
  }
   if(args[0] == "ping"){
    message.reply("Usage: `%ping`\nDescription: Checking API and Server latency.\nExample: `%ping`");
    return;
  }
   if(args[0] == "poll"){
    message.reply("Usage: `%poll [YOUR TEXT]\nDescription: Making a poll.\nExample: `%poll Should we make a poll channel?`");
    return;
  }
   if(args[0] == "roll"){
    message.reply("Usage: `%roll`\nDescription: Rolls a dice.\nExample: `%roll`");
    return;
  }
   if(args[0] == "servericon"){
    message.reply("Usage: `%servericon`\nDescription: Sends a link to servericon.\nExample: `%servericon`");
    return;
  }
   if(args[0] == "say"){
    message.reply("Usage: `%say [YOUR TEXT]`\nDescription: Repeat Your Text.\nExample: `%say Hello!`");
    return;
  }
   if(args[0] == "serverinfo"){
    message.reply("Usage: `%serverinfo`\nDescription: Gives you all possible details about a server.\nExample: `%serverinfo`");
    return;
  }
   if(args[0] == "support"){
    message.reply("Usage: `%support`\nDescription: Gives you a link to join support server.\nExample: `%support`");
    return;
  }
   if(args[0] == "unlockdown"){
    message.reply("Usage: `%unlockdown reason>`\nDescription: Lifting the lockdown from channel.\nRequire Permission: `Manage Server`\nExample: `%unlockdown Drama Ended!`");
    return;
  }
   if(args[0] == "unmute"){
    message.reply("Usage: `%unmute <user> <reason>`\nDescription: Unmutes a user.\nRequire Permission: `Manage Messages`\nExample: `%unmute @User Punishment ended!`");
    return;
  }
   if(args[0] == "uptime"){
    message.reply("Usage: `%uptime`\nDescription: Tells you exactly the time bot was up.\nExample: `%uptime`");
    return;
  }
   if(args[0] == "warn"){
    message.reply("Usage: `%warn <user> <reason>`\nDescription: Warns a user for bad behavior.\nExample: `%warn @User Bad Boy!`");
    return;
   }
   if(args[0] == "announce"){
      message.reply("Usage: `%announce <your text>`\nDescription: Announces text you give.\nExample: `%announce Hey, i have an announcement.!`");
      return;
  if(args[0] == "stats"){
      message.reply("Usage: `%stats`\nDescription: Gives you alot of informations regarding bot..\nExample: `%stats`");
      return;
      }
      if(args[0] == "user"){
        message.reply("Usage: `%user [user]`\nDescription: Gives you full informations regarding a user in the server.\nExample: `%user @User`");
        return;
      }
      if(args[0] == "spin"){
        message.reply("Usage: `%spin`\nDescription: Gives you a random number from 0 to 36..\nExample: `%spin`");
        return;
      }
  }
  message.react("✅");
   const hEmbed = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setTitle("My prefix is %.")
   .setDescription("Here is a list of available commands.")
   .addField("__Moderation Commands__:", "`mute`,`lockdown`,`unlockdown`,`clear`,`unmute`,`kick`,`ban`,`warn`")
   .addField("__Fun Commands__:", "`8ball`,`meme`,`roll`,`flipcoin`,`say`,`ilegal`,`spin`")
   .addField("__Utility Commands__:","`poll`,`serverinfo`,`servericon`,`avatar`,`announce`,`user`")
   .addField("__General Commands__:", "`support`,`ping`,`invite`,`help`,`about`,`uptime`,`stats`")
   .addField("If you need assistance please type '%support.'", "If you want to invtie me to your server do '%invite'.");
  message.channel.send("A list of valid commands has been sent in your DMs.");
   try {
   await message.author.send(hEmbed);
} catch(err) {
  message.channel.send("Oops, your DMs were locked.");
  message.channel.send(hEmbed);
}
}
module.exports.help = {
  name: "help"
}
