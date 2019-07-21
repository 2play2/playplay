const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"
var adminprefix = '#'


//bc

client.on("message", message => {
    if (message.content.startsWith("#obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "#";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + 
