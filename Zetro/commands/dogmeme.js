const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const dogmemes = [
  "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/21/7/asset/buzzfeed-prod-fastlane-01/sub-buzz-27754-1490095022-2.jpg?downsize=715:*&output-format=auto&output-quality=auto", "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/21/7/asset/buzzfeed-prod-fastlane-03/sub-buzz-31230-1490094201-10.png?downsize=715:*&output-format=auto&output-quality=auto", "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/21/7/asset/buzzfeed-prod-fastlane-01/sub-buzz-28885-1490095558-1.jpg?downsize=715:*&output-format=auto&output-quality=auto", "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/21/7/asset/buzzfeed-prod-fastlane-01/sub-buzz-28885-1490095686-3.png?downsize=715:*&output-format=auto&output-quality=auto", "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/21/8/asset/buzzfeed-prod-fastlane-03/sub-buzz-629-1490097889-10.png?downsize=715:*&output-format=auto&output-quality=auto"
 ]
 message.channel.send(`Your dogmeme is: ${dogmemes[Math.floor(Math.random() * dogmemes.length)]}`);
return;
}
 
module.exports.help = {
  name: "dogmeme"
}
