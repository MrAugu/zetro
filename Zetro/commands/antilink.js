const Discord = require("discord.js");
const fs = require("fs");
const options = require("../automodlink.json")

module.exports.run = async (client, message, args) => {
    //if(!message.member.hasPermission("MANAGE_GUILD"))
    //return message.channel.send("You don't have permission to do that!");
    if(!args[0]) {
        message.channel.send("Please chosee between ON/OFF in capital letters.");
        return;
    }

    else if(args[0] === "ON") {
        options[message.guild.id] = {
            options: "ON"
        };
    }
    else if(args[0] === "OFF") {
        options[message.guild.id] = {
            options: "OFF"
        };
    }
    else {
        return;
    }
      fs.writeFile("./automodlink.json", JSON.stringify(options), (err) => {
        if (err) console.log(err)
      });
    
      if(args[0] === "ON") {
          message.channel.send("Automod turned ON, i will now warn peoples who send links, im ignoring people with Manage Server, Administrator and however server owners.");
      }

      else if(args[0] === "OFF") {
          message.channel.send("Automod turned OFF, i will now ignore peoples who send links.");
      }
}

module.exports.help = {
  name: "antilink"
}
