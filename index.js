const { error } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const api = require('covidapi');
const keepAlive = require('./alive.js')
keepAlive();




const webhook = require("webhook-discord");

//https://discord.com/api/webhooks/879780948466630656/Dl4f-1GbHkbpWVq4DSNC13LwmfLZR1O4pBHj1KtAHjrNSEihadeeRMeZ2vpjTd0e2CWF

const logHook = new Discord.WebhookClient('880032537454465034', 'iFObCsQrGUJ_O_T_7igGN_nxEkxPbkoHJ0dTtnVTUQfRxmLE_xBaca198HN7DRSfRwrd');




 const ytdl = require('ytdl-core');


const client = new Discord.Client();




const { clientId, prefix, bot_age, words_array, bot_info, ownerID } = require('./config.json');

client.on("warn", (info) => console.log(info));
client.on("error", console.error);



client.once('ready', async() => {

  console.log('Connecting....');
  console.log('Connected !');
  console.log('________');
  console.log('   ');

  client.user.setPresence({
    activity: {
      type: 'PLAYING',
      name: prefix + 'help'

    },
    status: 'dnd'
  })
    .catch(console.error);


});

client.on('guildCreate', guild => {

  const guildCreateEmbed = new Discord.MessageEmbed()
                                .setTitle('Added to guild')
                                .addField('name: ', guild.name, true)
                                .addField('id: ', guild.id, true)
                                .addField('members: ', guild.memberCount, true)
                                .setTimestamp(new Date())
                                .setColor('#00ff00')
                                .setThumbnail(guild.iconURL())

  client.guilds.cache.get('875712239192113153').channels.cache.get('879301182043086848').send(guildCreateEmbed)
})

client.on('guildDelete', guild => {

  const guildDeleteEmbed = new Discord.MessageEmbed()
                                .setTitle('Removed from guild')
                                .addField('name: ', guild.name, true)
                                .addField('id: ', guild.id, true)
                                .addField('members: ', guild.memberCount, true)
                                .setTimestamp(new Date())
                                .setColor('#ff0000')
                                .setThumbnail(guild.iconURL())

  client.guilds.cache.get('875712239192113153').channels.cache.get('879301182043086848').send(guildDeleteEmbed)
})

client.on('guildMemberAdd', member => {
  if(member.guild.id != '875712239192113153') return;
  member.guild.channels.cache.get('877963275382448158').send(`<@${member.id}> just joined \n tag: ${member.tag} \n id: ${member.id}`);
})

client.on('guildMemberRemove', member => {
  if(member.guild.id != '875712239192113153') return;
  member.guild.channels.cache.get('877963275382448158').send(`<@${member.id}> just left the server \n tag: ${member.tag} \n id: ${member.id}`);
})

client.on('message', async message => {



var serverboost
  if(message.guid){var nboost = message.guild.premiumSubscriptionCount 
if (nboost < 2 ){
serverboost = 0;
} else if (nboost < 15) {
serverboost = 1;
}else if (nboost < 30) {
serverboost = 2;
} else if (nboost == 30) {
serverboost = 3;
}
  

  var videoIdPlay;

var servers = {};

var server = message.guild
server.queue = []
  }

  const serevrsIn = await client.guilds.cache.size;

  const sayMessage = message.content.substring(message.content.indexOf(' ') + 1);

  const args = message.content.slice(prefix.length).trim().split(' ');

  const dmSuccessEmbed = new Discord.MessageEmbed()
    .setColor('#588EF2')
    .setTitle('DM SUCCESS')

  const serevrsInEmbed = new Discord.MessageEmbed()
    .setColor('#588FE2')
    .setTitle(`I'm in ` + serevrsIn + ' servers')




  
  if (message.content === prefix + 'Hi') {
    message.channel.send('<@' + message.author + '> ' + 'Hello!');
  }
   



  if (message.content.startsWith(prefix) || message.content.startsWith('<@!810194332338094101>')) {



  

    const Command = args.shift().toLowerCase();
if(Command === 'testhook'){
  // logHook.send('hi')
}
  

  if(Command === 'upload_emoji' || Command === 'uploademoji'){

    if(!message.member.hasPermission('MANAGE_EMOJIS')&&!message.member.hasPermission('ADMINISTRATOR')&&message.author.id != ownerID)return client.api.channels[message.channel.id].messages.post({data: {content: "You cannot use this command !",message_reference: {message_id: message.id,channel_id: message.channel.id,guild_id: message.guild.id}}})

      if(!message.guild.me.hasPermission('MANAGE_EMOJIS')&&!message.guild.me.hasPermission('ADMINISTRATOR')) return client.api.channels[message.channel.id].messages.post({data: {content: "I don't have permissions to add emojis. Give me manage `MANAGE_EMOJIS` permission to use this command",message_reference: {message_id: message.id,channel_id: message.channel.id,guild_id: message.guild.id}}})

    if(args.length){
      const url = sayMessage;
        if(!url.startsWith('https://')&&!url.startsWith('http://')) return message.channel.send('Please enter a valid image url that starts with `http://` or `https://`');
        if(!url.endsWith('.png')&&!url.endsWith('jpg')&&!url.endsWith('jpeg')&&!url.endsWith('gif')&&!url.endsWith('webp')) return message.channel.send('Please enter a valid image url that ends with `.png`, `.gif`, `.jpg`, `.jpeg`, `.webp`');
        try{
          message.guild.emojis.create(url, 'emoji_1')
          .then(message.channel.send(`Created emoji \`${url}\``)).catch(console.error);
        } catch(error){
          message.channel.send(`Failed to upload \`${url}\``);
        } 
      
    } else{
      client.api.channels[message.channel.id].messages.post({
  data: {
    content: "Please specify some emoji url !",
    message_reference: {
      message_id: message.id,
      channel_id: message.channel.id,
      guild_id: message.guild.id
    }
  }
})
    }
  }

    if(Command === 'servers'){
      message.channel.send(serevrsInEmbed);
    }

    

    if (Command === 'ping') {
    message.channel.send('Pong! Calculating ping....').then(resultMessage => {
      const pingMessage = resultMessage.createdTimestamp - message.createdTimestamp;
      message.channel.send('Bot Latency : ' + pingMessage);
    })


  }

    if (Command === 'membercount') {
    if (!message.guild) return message.channel.send('This command cannot be used here');
    message.channel.send('Total Members : ' + message.guild.memberCount)
  }

    if (Command === 'boostlevel'){
var nboost = message.guild.premiumSubscriptionCount 
if (nboost < 2 ){
message.channel.send("Level 0")
} else if (nboost < 15) {
message.channel.send("Level 1")
}else if (nboost < 30) {
message.channel.send("Level 2")
} else if (nboost == 30) {
message.channel.send("Level 3 (Max!)")
}
} 

    if(Command === 'boosts'){
      if(message.author.id != ownerID) return;
      message.channel.send(message.guild.premiumSubscriptionCount || '0');
    }

    if(Command === 'emojicount' || Command === 'emojis'){
      message.channel.send(`This server has ${message.guild.emojis.cache.size} emojis`)
    }

    if(Command === 'supportserver' || Command === 'support'){
      client.api.channels[message.channel.id].messages.post({
  data: {
    content: "https://discord.gg/yrMQdvyRge",
    message_reference: {
      message_id: message.id,
      channel_id: message.channel.id,
      guild_id: message.guild.id
    }
  }
})
    }

    if(Command === 'steal'){
      if(!message.member.hasPermission('MANAGE_EMOJIS')&&!message.member.hasPermission('ADMINISTRATOR')&&message.author.id != ownerID)return client.api.channels[message.channel.id].messages.post({data: {content: "You cannot use this command !",message_reference: {message_id: message.id,channel_id: message.channel.id,guild_id: message.guild.id}}})

      if(!message.guild.me.hasPermission('MANAGE_EMOJIS')&&!message.guild.me.hasPermission('ADMINISTRATOR')) return client.api.channels[message.channel.id].messages.post({data: {content: "I don't have permissions to add emojis. Give me manage `MANAGE_EMOJIS` permission to use this command",message_reference: {message_id: message.id,channel_id: message.channel.id,guild_id: message.guild.id}}})

     if(!args.length){
       client.api.channels[message.channel.id].messages.post({
  data: {
    content: "Please specify some emojis !",
    message_reference: {
      message_id: message.id,
      channel_id: message.channel.id,
      guild_id: message.guild.id
    }
  }
})
} else{
 


 
    for(const rawEmoji of args){



    const parseEmoji = Discord.Util.parseEmoji(rawEmoji);
    if(parseEmoji.id){
      const extention = parseEmoji.animated ? '.gif' : '.png';
      const url = `https://cdn.discordapp.com/emojis/${parseEmoji.id + extention}`;
      try{message.guild.emojis.create(url, parseEmoji.name)
      .then((emoji) => {
        message.channel.send(`Added emoji ${emoji}`)
      }).catch(console.error)}
      catch(error){
        message.channel.send("Something went wrong. This might be happen if the server's emoji slot is full or the emoji is invalid. If not so, contact our support server by using the `%support` command")
      }
    } else{
      message.channel.send('Something went wrong, please try again or contact us on our support server by using the command `%supportserver`')
    }
  }
  

  
}
    }

    if (Command === 'play' || Command === 'p') {





      const args2 = message.content.split(' ').slice(1)

      process.on('unhandledRejection', error => {
        console.log(error);


      });
      const searchQuery = sayMessage;
      if (!message.guild) return;
      if (!message.member.voice.channel) return message.reply('You need to be in a voice channel to use this command');
      if (message.guild.me.voice.channel && message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.reply('You need to be in the same voice channel as my to use this command');
      if (error === `No video id found: ${args2.join()}`) return message.reply('Please enter a valid youtube video id or link');

      const connection = await message.member.voice.channel.join();
         


     
      if (!ytdl.validateID(searchQuery) || !ytdl.validateURL(searchQuery)) {


        const yt = require('youtube-search-without-api-key');





        
        const videos = await yt.search(searchQuery);

        if (videos.length != 0) {
          console.log('Videos:');
          console.log(videos)

          const vidToPlay = videos[0]
          vidToPlayId = vidToPlay.id.videoId;
        

        console.log(vidToPlayId);
        

        const videoThumbnail = `https://img.youtube.com/vi/${vidToPlayId}/maxresdefault.jpg`;

         
      const dispatcher = connection.play(ytdl(vidToPlayId));
       
            const nowPlayingEmbed = new Discord.MessageEmbed()
          .setTitle('NOW PLAYING')
          .setColor('ORANGE')
          .setDescription(vidToPlay.title)
          .setThumbnail(videoThumbnail)
          .setFooter(message.author.tag, 'https://media0.giphy.com/media/SS8zaNFIbwyjcPdh8U/source.gif')
          .setTimestamp(new Date())
        message.channel.send(nowPlayingEmbed);
        


      } else {
        message.channel.send('No videos found')
      }
      
      } else if(ytdl.validateID(searchQuery)){
        const vidToPlay = ytdl.getInfo(searchQuery);
        const videoTitle = vidToPlay.videoDetails.title;
        const videoThumbnail = `https://img.youtube.com/vi/${searchQuery}/maxresdefault.jpg`;

         
 const dispatcher = connection.play(ytdl(searchQuery));
         

            const nowPlayingEmbed = new Discord.MessageEmbed()
          .setTitle('NOW PLAYING')
          .setColor('ORANGE')
          .setDescription(videoTitle)
          .setThumbnail(videoThumbnail)
          .setFooter(message.author.tag, 'https://media0.giphy.com/media/SS8zaNFIbwyjcPdh8U/source.gif')
          .setTimestamp(new Date())
        message.channel.send(nowPlayingEmbed);
        

      } else if(ytdl.validateURL(searchQuery)){
        const vidToPlay = ytdl.getInfo(searchQuery);
        const videoTitle = vidToPlay.videoDetails.title;
        const videoThumbnail = `https://img.youtube.com/vi/${vidToPlay.videoDetails.id}/maxresdefault.jpg`;

         

         
            const nowPlayingEmbed = new Discord.MessageEmbed()
          .setTitle('NOW PLAYING')
          .setColor('ORANGE')
          .setDescription(videoTitle)
          .setThumbnail(videoThumbnail)
          .setFooter(message.author.tag, 'https://media0.giphy.com/media/SS8zaNFIbwyjcPdh8U/source.gif')
          .setTimestamp(new Date())
        message.channel.send(nowPlayingEmbed);
        
        
        const dispatcher = connection.play(ytdl(searchQuery));
        
        }
    }

  
    

    if (Command === 'joinvc') {
      if (!message.guild) return;
      if (message.guild.me.voice.channel) return message.reply('I am already in a voice channel');
      if (!message.member.voice.channel) return message.reply('You need to be in a voice channel to use this command');
      if (message.guild.me.voice.channel && message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.reply('I am already in a voice channel');

      await message.member.voice.channel.join()
      message.reply('successfully joined <#' + message.member.voice.channel.id + '> ');
    }

    if (Command === 'disconnect' || Command === 'dc') {

      if (!message.guild.me.voice.channel) return message.channel.send('I am not in a voice channel');
      if (!message.member.voice.channel) return message.reply('You are not in a voice channel')
      if (message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.channel.send('You need to be in the same voice channel as me to use this command');

      await message.guild.me.voice.channel.leave()
      message.reply('I left the voice channel')
    }

    if (Command === 'covid') {

      const countryData = await api.all();
      const countryCoronaEmbed = new Discord.MessageEmbed()
        .setColor('ff2058')
        .setTitle('COVID-19 Statistics for Global')
        .setDescription('Number of cases may differ from other cases')
        .addField('Cases', countryData.cases, true)
        .addField('Cases Per Million', countryData.casesPerOneMillion, true)
        .addField('Active', countryData.active, true)
        .addField('Active Per Million', countryData.activePerOneMillion, true)
        .addField('Cases Today', countryData.todayCases, true)
        .addField('Critical', countryData.critical, true)
        .addField('Critical Per Million', countryData.criticalPerOneMillion, true)
        .addField('Deaths', countryData.deaths, true)
        .addField('Deaths Today', countryData.todayDeaths, true)
        .addField('Deaths Per Million', countryData.deathsPerOneMillion)
        .addField('Recovered', countryData.recovered, true)
        .addField('Today Recovered', countryData.todayRecovered, true)
        .addField('Recovered Per Million', countryData.recoveredPerOneMillion, true)
        .addField('Countries Affected', countryData.affectedCountries, true)

      if (args[0]) {
        const data = await api.countries({ country: message.content.substring(message.content.indexOf(args[0])) });
        const coronaEmbed = new Discord.MessageEmbed()
          .setColor('ff2058')
          .setTitle('COVID-19 Statistics for ' + message.content.substring(message.content.indexOf(args[0])))
          .setDescription('Number of cases may differ from other cases')
          .addField('Cases', data.cases, true)
          .addField('Cases Per Million', data.casesPerOneMillion, true)
          .addField('Active', data.active, true)
          .addField('Active Per Million', data.activePerOneMillion, true)
          .addField('Cases Today', data.todayCases, true)
          .addField('Critical', data.critical, true)
          .addField('Critical Per Million', data.criticalPerOneMillion, true)
          .addField('Deaths', data.deaths, true)
          .addField('Deaths Today', data.todayDeaths, true)
          .addField('Deaths Per Million', data.deathsPerOneMillion)
          .addField('Recovered', data.recovered, true)
          .addField('Today Recovered', data.todayRecovered, true)
          .addField('Recovered Per Million', data.recoveredPerOneMillion, true)

        if (data.cases) {
          message.channel.send(coronaEmbed);
        } else {
          message.channel.send(countryCoronaEmbed);
        }
      } else {
        message.channel.send(countryCoronaEmbed);
      }

    }

    if (Command === 'embed') {

      if (message.author.id != ownerID) return;

      if (args[0]) {


        const sayEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setDescription(sayMessage)

        message.delete();
        message.channel.send(sayEmbed);
      } else if (!args[0]) {
        message.channel.send(':x: please enter a text to put in embed');
      }

    }

    if (Command === 'react') {
      if (message.author.id != ownerID) return;
      const msg = message.channel.send('I am reacting to this message')
        .then((msg) => {
          setTimeout(function() {
            msg.react('😂').then(msg.edit('I have reacted to the message'));
          }, 1000)
        })
    }

    if (Command === 'role') {

      if (!message.guild) return;

      if (!message.member.hasPermission('MANAGE_ROLES') && !message.member.hasPermission('ADMINISTRATOR') && message.author.id != ownerID && message.author.id != '780003275729797120') return message.channel.send('<@' + message.author.id + '> ' + 'You do not have permissions to use this command')
      if (!message.guild.me.hasPermission('MANAGE_ROLES') && !message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send('I dont have permissions to manage roles')

      const roleMember = message.mentions.users.first();
      if (!roleMember) return message.channel.send('Please mention a user');

      const roleToGive = message.mentions.roles.first();
      if (!roleToGive) return message.channel.send('Please mention a role');

      const roleMember2 = message.guild.members.cache.get(roleMember.id);
      if (!roleMember2) return message.channel.send('Cannot find that user');

      const roleToGive2 = message.guild.roles.cache.get(roleToGive.id);
      if (!roleToGive2) return message.channel.send('Cannot find that role');

      if (!roleMember2.roles.cache.get(roleToGive2.id)) {
        roleMember2.roles.add(roleToGive2).then(message.channel.send(`Successfully given the role, ${roleToGive2.name}, to <@${roleMember.id}>`))
      } else {
        roleMember2.roles.remove(roleToGive2).then(message.channel.send('Successfully removed the role, ' + roleToGive2.name + ', from <@' + roleMember.id + '>'))
      }
    }

    if (Command === 'setnick') {

      if (!message.guild) return;

      if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('You dont have permissions to use this command');


      if (message.mentions.users.first()) {



        const memberName1 = message.mentions.users.first();


        if (args[1]) {

          const name = message.content.substring(message.content.indexOf(args[1]));
          const memberName = message.guild.members.cache.get(memberName1.id);
          memberName.setNickname(name);
          message.channel.send('Nickname changed !');
        }

        else if (!args[1]) {
          if (args[2]) {
            const name = message.content.substring(message.content.indexOf(args[2]));
            const memberName = message.guild.members.cache.get(memberName1.id);
            memberName.setNickname(name);
            message.channel.send('Nickname changed !');
          }
          else if (!args[2]) {
            if (args[3]) {
              const name = message.content.substring(message.content.indexOf(args[3]));
              const memberName = message.guild.members.cache.get(memberName1.id);
              memberName.setNickname(name);
              message.channel.send('Nickname changed !');
            }

            else if (!args[3]) {
              message.channel.send('Please enter a name');
            }
          }
        }




      }

      else {
        if (args[0]) {



          const name = message.content.substring(message.content.indexOf(args[0]));
          const membername2 = message.guild.members.cache.get(clientId);
          membername2.setNickname(name);
          message.channel.send('My nickname for this server is set to ' + name);
        }
        else {
          message.channel.send('Please enter a name')
        }
      }

    }

    if (Command === 'serversIn') {
      message.channel.send(serevrsIn);
    }

    if (Command === 'dm') {



      if (message.author.id != '753602341554356276' && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<@' + message.author + '> ' + 'You do not have permissions to use this command');
      if (!message.guild) return message.channel.send(':x: This command cannot be used here');
      if (!message.mentions.users.first()) return message.channel.send('Please mention a user to send dm');



      if (args[1]) {
        const taggedUser = message.mentions.users.first();
        const dmMessage = message.content.substring(message.content.indexOf(args[1]));

        if (taggedUser.id === '810194332338094101') return message.channel.send(':x: ERROR: You should not ping me in this command');

        message.delete();


        function dm() {
          const msg = message.channel.send(dmSuccessEmbed).then((msg) => {
            setTimeout(function() {
              msg.delete();
            }, 1700)
          })
        }

        taggedUser.send(dmMessage + "\nSent by : " + message.author.username + "\nServer : " + message.guild.name).then(dm());

      } else {
        message.channel.send(':x: Syntax error');
      }
    }

    if (Command === 'help') {
      if (message.guild) {
        if (!message.guild.me.hasPermission('EMBED_LINKS') && !message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(':x:`Please give me the permission of embed links to use this command`');
      }
      const helpEmbed2 = new Discord.MessageEmbed()
        .setColor('#588EF2')
        .setTitle('HELP COMMAND')
        .addField('Hello')
        .setURL('https://discord.com/oauth2/authorize?client_id=810194332338094101&scope=bot&permissions=2147483647')

       

      const helpEmbed = new Discord.MessageEmbed()
        .setColor('##00e500')
        .setTitle('See a full list of commands here !')
        .setURL('https://dreambot-web.wolvarogaming.repl.co/commands.html')
        .addFields(
          {
            name: '**Ping**-', value: 'To see the latency of the bot. Usage -' + '`' + prefix + 'ping' + '`'
          },
          {
            name: '**Member Count** -', value: 'Tells the total number of members in the server. Usage - ' + '`' + prefix + 'membercount' + '`'
          },
          {
            name: '**Warn**-', value: 'Used to warn a member. Usage - `%warn @<user> <reason>`'
          },
          {
            name: '**Slowmode**-', value: 'Used to set slowmode in the channel. Usage - `%sm <time in seconds>`'
          },
          {
            name: '**Kick**-', value: 'Kicks a user from the server. Usage - `%kick @<user> <reason>`'
          },
          {
            name: '**Ban**-', value: 'bans a member from the server. Usage - `%ban @<user> <reason>`'
          },
          {
            name: '**Unban**-', value: 'Unbans a banned member from the server. Usage - `%unban <user id>`'
          },
          {
            name: '**Say**-', value: 'says a customized message. Usage - `%say <message>`'
          },
          {
            name: '**Direct Message**-', value: 'Used to send a direct message to a user in the same server. Usage - `_dm <@user> <message>`'
          },
          {
            name: '**Invite**-', value: 'Used to invite me to a server. Usage - `%invite`'
          },
          {
            name: '**Role**-', value: 'Gives or removes a role from a member. Usage - `%role <@user> <@role>` or `%role <@role> <@user>`' 
          },{
            name: 'All commands- ', value: `See full list of commands [here](https://dreambot-web.wolvarogaming.repl.co/commands.html)`
          }

        )
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())




      if (message.guild) {
        if (message.mentions.members.first()) {

          if (message.guild.me.hasPermission('EMBED_LINKS')) {
            message.react('<a:colourful_dil:803322212286726205>');
          }

          const helpMember = message.mentions.members.first();
          helpMember.send(helpEmbed);
        }
        else {
          message.channel.send(helpEmbed);
        }
      }
      else if (!message.guild) {
        message.channel.send(helpEmbed);
      }
    }

    if (Command === 'invite') {

      if (message.guild) {


        if (!message.guild.me.hasPermission('EMBED_LINKS') && !message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(':x:`Please give me the permission of embed links to use this command`');

        const inviteEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setTitle('Invite Me')
          .setURL('https://discord.com/oauth2/authorize?client_id=810194332338094101&scope=bot&response_type=code&redirect_uri=https://discord.com/invite/yrMQdvyRge')
          .setDescription(':arrow_up:  Click here to invite me to a server')

        if (!message.mentions.users.first()) {
          message.channel.send(inviteEmbed);
        } else if (message.mentions.users.first()) {
          const inviteMember = message.mentions.users.first();
          inviteMember.send(inviteEmbed);
          message.react('<a:approval:814899038109302815>');
        }

      } else if (!message.guild) {
        const inviteEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setTitle('Invite Me')
          .setURL('https://discord.com/oauth2/authorize?client_id=810194332338094101&scope=bot&permissions=2147483647')
          .setDescription(':arrow_up:  Click here to invite me to a server')

        message.channel.send(inviteEmbed);
      }
    }

    if (Command === 'kick') {




      if (!message.guild) return message.channel.send('This command cannot be used here');
      if (!message.member.hasPermission('KICK_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR') && message.author.id != '753602341554356276') return message.reply('You do not have permission to use this command');
      if (!message.guild.me.hasPermission('KICK_MEMBERS') && !message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply('I do not have permission to use this command');

      const kickReason = message.content.substring(message.content.indexOf(args[1]));
      const kickMember = message.mentions.users.first();
      if (kickMember) {
        const targetMember = message.guild.members.cache.get(kickMember.id);
        targetMember.kick();

        const kickEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setDescription(kickMember.username + ' has been kicked | ' + kickReason);

        message.channel.send(kickEmbed);

      } else {

        const kickEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setDescription('Cannot find that user')


        message.channel.send(kickEmbed);

      }
    }

    if (Command === 'ban') {

      if (!message.guild) return message.channel.send('This command cannot be used here');
      if (!message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR') && message.author.id != '753602341554356276') return message.reply('You do not have permission to use this command');
      if (!message.guild.me.hasPermission('BAN_MEMBERS') && !message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply('I do not have permission to use this command');

      const banReason = message.content.substring(message.content.indexOf(args[1]));
      if (!banReason) {
        const banReason = 'no reason';
      }

      const banMember = message.mentions.users.first();
      if (banMember) {
        const targetMember = message.guild.members.cache.get(banMember.id);
        if (targetMember.id != ownerID) {
          targetMember.ban({
            reason: banReason
          });
        }

        const banEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setDescription(':white_check_mark:' + banMember.username + ' has been banned | ' + banReason)

        message.channel.send(banEmbed);

      } else {
        const banEmbed = new Discord.MessageEmbed()
          .setColor('#588EF2')
          .setDescription(':x: Cannot find that user')

        message.channel.send(banEmbed);

      }

    } else if (Command === 'unban') {

      if (!message.guild) return message.channel.send('This command cannot be used here !!');
      if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('BAN_MEMBERS') && message.author.id != '753602341554356276') return message.reply('You do not have permission to use this command');
      if (!message.guild.me.hasPermission('BAN_MEMBERS') && !message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply('I dont have permissions to ban or unban members');
      const reason = 'reason';
      if (!message.guild) return message.channel.send('This command cannot be used here');
      if (!message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR') && message.author.id != '753602341554356276') return message.reply('You do not have permission to use this command');
      if (!message.guild.me.hasPermission('BAN_MEMBERS') && !message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply('I do not have permission to use this command');

      const unbanErrorEmbed = new Discord.MessageEmbed()
        .setColor('#588EF2')
        .setDescription(' :x: Please put the id of the user to be unbanned')

      if (!args[0]) return message.channel.send(unbanErrorEmbed);

      const unbanMember = await client.users.fetch(args[0]);


      message.guild.members.unban(unbanMember, reason);

      const unbanEmbed = new Discord.MessageEmbed()
        .setColor('#588EF2')
        .setDescription(':white_check_mark: ' + unbanMember.username + ' has been unbanned')

      message.channel.send(unbanEmbed);
    }

    if (Command === 'clear') {

      if (!message.guild) return message.channel.send('This command cannot be used here !!');

      const deletableMsg = message.channel.messages.fetch(args[0]);

      if (!deletableMsg) return message.reply('No messages to be deleted. Try entering a smaller value');

      if (message.author.id != '753602341554356276' && !message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('MANAGE_GUILD') && !message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<@' + message.author + '> ' + 'You need the permission to use this command');
      if (!args[0]) return message.reply('Heyy, please enter the number of messages you want to delete');
      if (isNaN(args[0])) return message.reply('Please enter a number');
      if (args[0] > 100) return message.reply('Please enter a number less than 100');
      if (args[0] < 1) return message.reply('Please delete atleast one message');

      await message.channel.messages.fetch({ limit: args[0] }).then(messages => {

        function msgdlt() {
          const msg = message.channel.send('Cleared ' + args[0] + ' messages').then((msg) => {
            setTimeout(function() {
              msg.delete();
            }, 2500)
          })
        }

        function bulkDlt() {
          message.channel.bulkDelete(messages).then(msgdlt());
        }

        message.delete().then(bulkDlt())

      })
    }


    if (Command === 'modmail') {
      message.channel.send(':x: `This function is not available right now`');
    }

    if (Command === 'mute') {
      if (!message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('MANAGE_GUILD') && !message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('<@' + message.author + '> ' + 'You need the permission to use this command');
      message.channel.send('<@' + message.author + '> ' + 'That command is under development');
    }



    if (Command === 'say') {

      if (message.guild) {
        if (!message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('ADMINISTRATOR') && message.author.id != ownerID) return message.channel.send('You cannot use this command')

        if (args[0]) {

          message.delete();
          message.channel.send(sayMessage);
        } else if (!args[0]) {
          message.channel.send(':x: please enter a text to say');
        }
      } else {
        if (args[0]) {

          message.channel.send(sayMessage);
        } else if (!args[0]) {
          message.channel.send(':x: please enter a text to say');
        }
      }
    }


    if (Command === 'sm' || Command === 'slowmode') {

      if (!message.guild) return message.channel.send(':x: This command cannot be used here......');
      if (message.author.id != '753602341554356276' && !message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('MANAGE_GUILD') && !message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('MANAGE_ROLES') && !message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('<@' + message.author + '> ' + 'You need the permission to use this command');
      if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(':x: Please give me Manage channels permission to use this command.');
      if (args[0]) {
        if (isNaN(args[0])) return message.channel.send(':x: Please enter a number');
        if (args[0] < 0) return message.channel.send(':x: Please enter a number greater than 0');
        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send('Slowmode has been enabled for this channel with a delay of ' + args[0] + 's');
      } else if (!args[0]) {
        if (message.channel.rateLimitPerUser === 0) {
          message.channel.send('slowmode has been enabled in this channel with a delay of 5s');
          message.channel.setRateLimitPerUser(5);
        } else if (message.channel.rateLimitPerUser != 0) {
          message.channel.send('slowmode has been disabled for this channel');
          message.channel.setRateLimitPerUser(0);
        }
      }
    }

    if (Command === 'warn') {

      if (message.author.id != '753602341554356276' && !message.member.hasPermission('MANAGE_CHANNELS') && !message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('MANAGE_GUILD') && !message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('MANAGE_ROLES') && !message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('<@' + message.author + '> ' + 'You need the permission to use this command');
      if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(':x:`Please give me the permission of embed links to use this command`');


      if (!message.guild) return message.channel.send(':x: this command cannot be used here.....');
      if (args[1]) {
        const taggedUser = message.mentions.users.first();
        const reason = message.content.substring(message.content.indexOf(args[1]));
        if (!taggedUser) return message.channel.send(':x: cant find that user....');
        if (taggedUser === message.author) return message.channel.send('<@' + message.author + '> ' + ':x: you cannot warn yourself');
        if (taggedUser != '810194332338094101') {

          const warnEmbed = new Discord.MessageEmbed()
            .setColor('#588EF2')
            .setDescription(taggedUser.username + ' Have been Warned | ' + reason)

          const warnDmEmbed = `You were warned in ${message.guild.name}. Reason: ${reason}`

          message.channel.send(warnEmbed);
          taggedUser.send(warnDmEmbed);

        }
      }
      else { message.channel.send(`:x: syntax error`) }
    }
  }
  

  if (message.content === 'Love you') {
    message.react('<a:colourful_dil:803322212286726205>');
  }


})





client.login(process.env.token);

