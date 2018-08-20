const Discord = require ("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const coins = require("./coins.json");
const DBL = require("dblapi.js");
const dbl = new DBL('Your discordbots.org token', client);

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("No commands has been detected!");
      return;
    }

    jsfile.forEach((f,) => {
      let props = require(`./commands/${f}`);
      console.log(`${f} has been loaded!`);
      client.commands.set(props.help.name, props);
    });

  });

  client.on("ready", async () => {
      await client.user.setActivity(`${client.guilds.size} servers | ${client.users.size} users`, { type: 'WATCHING' });
      await client.user.setStatus("online");
      console.log("Connected Succefully!");
  });

    //Discord Bot List API Events
    dbl.on('posted', () => {
      console.log('Server count posted!');
    });

    dbl.on('error', e => {
     console.log(`Oops! ${e}`);
});
  //Bot's Events
  client.on("guildCreate", async guild => {
    await client.user.setActivity(`${client.guilds.size} servers | ${client.users.size} users`, { type: 'WATCHING' });
  });
  
  client.on("guildDelete", async guild => {
    await client.user.setActivity(`${client.guilds.size} servers | ${client.users.size} users`, { type: 'WATCHING' });
  });


  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: "%"
      };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    if(coins[message.author.id]){
        let coinAmt = Math.floor(Math.random() * 72) + 1;
        let baseAmt = Math.floor(Math.random() * 72) + 1;
  
      if(coinAmt === baseAmt){
        coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmt
      };
  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
      });
    }
  }
   
   if (message.isMentioned(client.user)) {
    const mentionEmbed = new Discord.RichEmbed()
    .setTitle("Prefix for this server is:")
    .setColor("#070505")
    .setDescription(`${prefix}`)
    .setFooter(`You can change it with ${prefix}setprefix <prefix>`)
    .setTimestamp();
    message.channel.send(mentionEmbed);
}

   if(!message.content.startsWith(prefix)) return;

   let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);

  });

client.login("NICE_TRY");
