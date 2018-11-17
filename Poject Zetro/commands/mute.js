const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don`t have permission to do this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.member.id === tomute.id) return message.channel.send("Sorry but i can't allow self-harm.");
  if(!tomute) return message.reply("Please mention a valid user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, the user can't be muted.");
  let reason = args.slice(1).join(" ");
  if(!reason) return message.reply("Please specify a reason.");

  let muterole = message.guild.roles.find(`name`, "Z-Muted");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Z-Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

 let mutec = message.guild.channels.find(`name`, "logs");
  let muteEmbed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle("#Action:")
  .setDescription("Mute")
  .addField("Moderator:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`)
  .addField("Member Muted:", `${tomute}`);
  mutec.send(muteEmbed);
  await(tomute.addRole(muterole.id));
  message.channel.send(`**${tomute}** has been muted.`);
}

module.exports.help = {
  name: "mute"
}
