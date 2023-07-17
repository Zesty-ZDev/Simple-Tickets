const { EmbedBuilder, InteractionType, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ChannelType, ChannelManager, PermissionsBitField } = require("discord.js");
const config = require("../../config.js");
const discordTranscripts = require('discord-html-transcripts');

//DataBase Connection
const dbPath = require("../database/database.js")
const sqlite3 = require('sqlite3').verbose();
//Connecting to local Database
const db = new sqlite3.Database(dbPath.path, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})
let sql;

module.exports = {
	name: 'interactionCreate',
	execute: async(interaction) => {
  let client = interaction.client;
  if (interaction.isButton()){
    if (interaction.customId == 'OpenTicketButton') {

        sqlcheck = (`SELECT EXISTS(SELECT DiscordID FROM Tickets WHERE DiscordID = (?));`)
        db.all(sqlcheck, [`${interaction.user.id}`], async (err, row) => {
          if (err){console.log(err)}else{
            let string = JSON.stringify(row)
            let stringcut = string.slice(-3, -2)
            if(stringcut == `1`){interaction.reply({content: 'You already have an open ticket!', ephemeral: true})}
            else{
              if(config.NoSelectMenu == true){
                


       //Embed
        const embed1 = new EmbedBuilder()
        .setTitle(`${client.user.username}`)
        .setDescription(`**Open Ticket**\n\nPlease wait patiently and a member of The staff team will be here to help shortly`)
        .setColor(config.color)
        .setThumbnail(config.thumbnail)
        .setFooter({
          text: `${client.user.username}`,
          iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
        });
        //Button
        const close1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('close1')
            .setLabel('Close Ticket')
            .setStyle('Secondary')
        );
        //setting varibles
        var discid = interaction.user.id
        var discname = interaction.user.username
        
      var createdChannel = await interaction.guild.channels.create({
          name: `Ticket ${discname}`,
          topic: `${discid}`,
          type: ChannelType.GuildText,
          parent: config.TicketCategory,
          permissionOverwrites: [
            {
              id: interaction.user.id,
              allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.ReadMessageHistory]
              },
              {
                id: config.StaffRole,
                allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.ReadMessageHistory]
                },
              {
                id: interaction.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel]
                }
            
          ]
         })

         var ticketchannel = createdChannel
    
         const embed2 = new EmbedBuilder()
         .setTitle(`${client.user.username}`)
         .setDescription(`Thanks ${interaction.user.username} for creating a ticket\n click the button below to head over to your ticket!`)
         .setColor(config.color)
         .setThumbnail(config.thumbnail)
         .setFooter({
          text: `${client.user.username}`,
          iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
        });
         //Button
         const clear = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder()
           .setURL(`https://discord.com/channels/${interaction.guild.id}/${ticketchannel.id}`)
           .setLabel('Your Ticket')
           .setStyle('Link')
       );
         ticketchannel.send({embeds: [embed1], components: [close1]})

         sql = 'INSERT INTO "Tickets" ("DiscordID" ) Values (?)';
         db.run(sql, [`${interaction.user.id}`], (err) => {
           if (err) return console.error(err.message);
         });
 
         interaction.reply({embeds:[embed2],components:[clear], ephemeral: true})

        
}else{




              

 //TICKET EMBED 2
 const ticket = new EmbedBuilder()
 .setTitle(`${client.user.username}`)
 .setDescription(`**Tickets**\n\n Select a category from the selection below \n\n *If you are unsure what category your question may fall under just open your ticket as a "General Support" ticket*`)
 .setColor(config.color)
 .setThumbnail(config.thumbnail)
 .setFooter({
    text: `${client.user.username}`,
    iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
  });
 //TICKET ROW
 const ticketrow = new ActionRowBuilder()
 .addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('selectcategory')
        .setPlaceholder('Select a ticket category')
        .addOptions(
            //Row One
            {
                label: config.SelectMenu1Label,
                description: config.SelectMenu1Description,
                value: 'rowsel1',
            },
            //Row One
            //Row Two
            {
                label: config.SelectMenu2Label,
                description: config.SelectMenu2Description,
                value: 'rowsel2',
            },
            //Row Two
            //Row Three
            {
                label: config.SelectMenu3Label,
                description: config.SelectMenu3Description,
                value: 'rowsel3',
            },
            //Row Three
            //Row Four
            {
                label: config.SelectMenu4Label,
                description: config.SelectMenu4Description,
                value: 'rowsel4',
            },
            //Row Four
            //Row Five
            {
                label: config.SelectMenu5Label,
                description: config.SelectMenu5Description,
                value: 'rowsel5',
            },
            //Row Five
        ),
)
interaction.reply({embeds: [ticket], components: [ticketrow], ephemeral: true})
    }
  }
}
}
     )
   }
 }
 
        







//Are you sure buttons
    if (interaction.isButton()){
        if (interaction.customId == 'close1') {
            const areyousure = new EmbedBuilder()
            .setTitle(`${client.user.username}`)
            .setDescription(`**Are you Sure?**\n*Select either "Yes" or "No" from below to choose if you wish to close the ticket*`)
            .setColor(config.color)
            .setThumbnail(config.thumbnail)
            .setFooter({
                text: `${client.user.username}`,
                iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
              });

            const areyousurerow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('yesc')
                .setLabel('Yes')
                //.setEmoji('')
                .setStyle('Secondary'),

                new ButtonBuilder()
                .setCustomId('noc')
                .setLabel('No')
                //.setEmoji('')
                .setStyle('Secondary'),
              ); 
              interaction.reply({embeds: [areyousure], components: [areyousurerow]})
        }
}

//  Are you sure (NO)
        if (interaction.isButton()){
        if (interaction.customId == 'noc') {
                //dostuffhere
            interaction.update({embeds:[],components: [], content: `Canceling the closing of the ticket`})

            }
        }      
            //Are you sure (YES)
            
            if (interaction.isButton()){
                if (interaction.customId == 'yesc') {
                    //setting varibles
                    var chanuser = interaction.channel.topic
                    var channame = interaction.channel.name
                    var user = channame.slice(7)
                    var categoryid = interaction.channel.parentId
                    var everyone = interaction.guild.id
 
                    if (categoryid == config.SelectMenu1Category){global.DataRole = config.SelectMenu1Role}
                    if (categoryid == config.SelectMenu2Category){global.DataRole = config.SelectMenu2Role}
                    if (categoryid == config.SelectMenu3Category){global.DataRole = config.SelectMenu3Role}
                    if (categoryid == config.SelectMenu4Category){global.DataRole = config.SelectMenu4Role}
                    if (categoryid == config.SelectMenu5Category){global.DataRole = config.SelectMenu5Role}
                    if (categoryid == config.TicketCategory){global.DataRole = config.StaffRole} // "simple config" only
                    
                    //removing user access fron ticket
                    interaction.channel.permissionOverwrites.set([
                      {
                        id: everyone,
                        deny: [PermissionsBitField.Flags.ViewChannel],
                      },
                      {
                        id: DataRole,
                        allow: [PermissionsBitField.Flags.ViewChannel],
                      },
                      ])   
                      .catch (() => interaction.channel.send({content: `*The ticket users could not have channel access revoked this is likely due to staff role being above the ticket bot*`}))



                    sqlcheck = (`DELETE FROM Tickets WHERE DiscordID = (?);`)
                    db.all(sqlcheck, [`${chanuser}`], async (err, row) => {
                      if (err){console.log(err)}})


//Sending star rating system
if (config.ReviewEnabled == true){
//Rating Embed AN
const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**${user}**\n\n Would you like to leave a review on your experience with our staff here at ${config.ServerName}\n\n*Note this review is not anonymous*`)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
//Rating Row
const NotifyActionRow = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setCustomId('YReview')
    .setLabel('Yes')
    //.setEmoji('')
    .setStyle('Secondary'),

    new ButtonBuilder()
    .setCustomId('NReview')
    .setLabel('No')
    //.setEmoji('')
    .setStyle('Secondary'),
  ); 

  
                        client.users.send(chanuser,{embeds: [NotifyUser],components: [NotifyActionRow]})
                        .catch (() => interaction.channel.send({content: `*I was not able to send the review system to the ticket user this may be due to the ticker user's privacy settings or the user is no longer in the guild*`}))
  
}

                    var channame = interaction.channel.name
                    interaction.channel.setName(`Closed ${channame}`)

                    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

                //Delete Embed + Button
                const delticket = new EmbedBuilder()
            .setTitle(`${client.user.username}`)
            .setDescription(`**Ticket Closed by:** <@${interaction.user.id}>\n\n**Click the button below to delete the ticket**\n\n*This will immediately delete the channel with no follow up Yes/No* `)
            .setColor(config.color)
            .setThumbnail(config.thumbnail) 
            .setFooter({
                text: `${client.user.username}`,
                iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
            });

            const delbutton = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('delt')
                .setLabel('Delete Ticket')
                //.setEmoji('')
                .setStyle('Secondary'),
              ); 
              await delay(1000)
              interaction.update({embeds: [delticket], components: [delbutton]})
              .catch (() => console.log(" "))                        
                    }
                  }



//Del ticket button handler
                    if (interaction.isButton()){
                        if (interaction.customId == 'delt') {
                          
                            const channel = interaction.channel;
                            var chanuser = interaction.channel.topic
                            var channame = interaction.channel.name

                            const embed = new EmbedBuilder()
            .setTitle(`${client.user.username}`)
            .setDescription(`Ticket transcript for - <@${chanuser}>`)
            .setColor(config.color)
            .setThumbnail(config.thumbnail) 
            .setTimestamp()
            .setFooter({
                text: `${client.user.username}`,
                iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
            });

            


                       const attachment = await discordTranscripts.createTranscript(channel);
                       client.channels.cache.get(config.TranscriptChannel).send({
                        embeds: [embed],
                        files: [attachment],
                        
                      });

                      interaction.channel.delete('Deleted Closed Ticket')
                      .catch (() => console.log(" "))
                    }
                        }

    }
}        
  
