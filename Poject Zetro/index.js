const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("I couldn't find any commands!");
    return;
  }

  jsfile.forEach((f,) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  bot.user.setActivity(` in ${bot.guilds.size} servers | %help`, { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'Prsence has ben set!'}`))
  .catch(console.error);
  console.log(`Zetro is ready in ${bot.guilds.size}!`);
  bot.user.setStatus('online');

});
bot.on("message", async message => {
  if(message.author.bot) return;
  let prefix = "%";
  if(!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);
