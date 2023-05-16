const { EmbedBuilder, InteractionType, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, ButtonBuilder, ChannelType, PermissionsBitField } = require("discord.js");
const config = require("../../config.js");

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




  if (interaction.isStringSelectMenu()){
    if (interaction.customId == 'selectcategory') {
if(interaction.values == 'rowsel1'){global.Data1 = config.SelectMenu1Label, global.Data2 = config.SelectMenu1Category, global.Data3 = config.SelectMenu1Role}
if(interaction.values == 'rowsel2'){global.Data1 = config.SelectMenu2Label, global.Data2 = config.SelectMenu2Category, global.Data3 = config.SelectMenu2Role}
if(interaction.values == 'rowsel3'){global.Data1 = config.SelectMenu3Label, global.Data2 = config.SelectMenu3Category, global.Data3 = config.SelectMenu3Role}
if(interaction.values == 'rowsel4'){global.Data1 = config.SelectMenu4Label, global.Data2 = config.SelectMenu4Category, global.Data3 = config.SelectMenu4Role}
if(interaction.values == 'rowsel5'){global.Data1 = config.SelectMenu5Label, global.Data2 = config.SelectMenu5Category, global.Data3 = config.SelectMenu5Role}
        const embed1 = new EmbedBuilder()
        .setTitle(`${client.user.username}`)
        .setDescription(`**Open Ticket**\n\n You have selected ${Data1} as the category of this ticket! \n\nPlease wait patiently and a member of The staff team will be here to help shortly`)
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
            .setStyle('Secondary'),
        );
        //setting varibles
        var disctag = interaction.user.tag
        var discid = interaction.user.id
        var discname = disctag.slice(0, -5)
        
      var createdChannel = await interaction.guild.channels.create({
          name: `Ticket ${discname}`,
          topic: `${discid}`,
          type: ChannelType.GuildText,
          parent: Data2,
          permissionOverwrites: [
            
            {
              id: interaction.user.id,
              allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.ReadMessageHistory]
              },
              {
                id: Data3,
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
 
         interaction.update({embeds:[embed2],components:[clear], ephemeral: true})

        }

      }
    }
}


