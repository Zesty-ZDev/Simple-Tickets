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
          
            //Yes Review
            if (interaction.isButton()){
                if (interaction.customId == 'YReview') {
//Rate embed 2
const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n Please feel free to rate your experience with our staff here at ${config.ServerName}\n\n*Note this review is not anonymous*`)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });

 
//Rate action row 2
const NotifyActionRow = new ActionRowBuilder()
.addComponents(
   new StringSelectMenuBuilder()
       .setCustomId('ratingsystem')
       .setPlaceholder('Rate your ticketing experience')
       .addOptions(
           {
               label: '⭐',
               value: 'rate1',
           },
           {
               label: '⭐⭐',
               value: 'rate2',
           },
           {
               label: '⭐⭐⭐',
               value: 'rate3',
           },
           {
               label: '⭐⭐⭐⭐',
               value: 'rate4',
           },
           {
               label: '⭐⭐⭐⭐⭐',
               value: 'rate5',
           },
       ),
)

interaction.update({embeds: [NotifyUser],components: [NotifyActionRow]})

    }
}    
//No review
if (interaction.isButton()){
    if (interaction.customId == 'NReview') {
        const NotifyUser2 = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\nThank your for opening a ticket with ${config.ServerName} - we respect your choice to not leave a review\n\n*Note this review is not anonymous*`)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
 interaction.update({embeds: [NotifyUser2],components: []})
    }
}


//1 star
if (interaction.isStringSelectMenu()){
if (interaction.customId == 'ratingsystem') {
if (interaction.values == "rate1") {
    const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n <@${interaction.user.id}> left a review - they rated their experience with our staff \`⭐----\``)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
 const NotifyUser2 = new EmbedBuilder()
 .setTitle(`${client.user.username}`)
 .setDescription(`**Tickets**\n\nThank your for opening a ticket with ${config.ServerName} - Review submitted\n Thank you for choosing to leave a review\n\n*Note this is not anonymous*`)
 .setColor(config.color)
 .setThumbnail(config.thumbnail)
 .setFooter({
    text: `${client.user.username}`,
    iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`})

    interaction.update({embeds:[NotifyUser2],components: []})
    client.channels.cache.get(config.ReviewChannel).send({
        embeds: [NotifyUser],
  
      });
    }
}}

//2 star
if (interaction.isStringSelectMenu()){
if (interaction.customId == 'ratingsystem') {
if (interaction.values == "rate2") {
    const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n <@${interaction.user.id}> left a review - they rated their experience with our staff \`⭐⭐---\``)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
    interaction.update({embeds:[],components: [], content: `Review submited thanks for choosing to leave a review`})
    client.channels.cache.get(config.ReviewChannel).send({
        embeds: [NotifyUser],
  
      });
    }}

}

//3 star
if (interaction.isStringSelectMenu()){
if (interaction.customId == 'ratingsystem') {

if (interaction.values == "rate3") {
    const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n <@${interaction.user.id}> left a review - they rated their experience with our staff \`⭐⭐⭐--\``)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
    interaction.update({embeds:[],components: [], content: `Review submited thanks for choosing to leave a review`})
    client.channels.cache.get(config.ReviewChannel).send({
        embeds: [NotifyUser],
  
      });
    }}

}

//4 star
if (interaction.isStringSelectMenu()){
if (interaction.customId == 'ratingsystem') {

if (interaction.values == "rate4") {
    const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n <@${interaction.user.id}> left a review - they rated their experience with our staff \`⭐⭐⭐⭐-\``)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
    interaction.update({embeds:[],components: [], content: `Review submited thanks for choosing to leave a review`})
    client.channels.cache.get(config.ReviewChannel).send({
        embeds: [NotifyUser],
  
      });
    }}

}

//5 star
if (interaction.isStringSelectMenu()){
if (interaction.customId == 'ratingsystem') {

if (interaction.values == "rate5") {
    const NotifyUser = new EmbedBuilder()
.setTitle(`${client.user.username}`)
.setDescription(`**Tickets**\n\n <@${interaction.user.id}> left a review - they rated their experience with our staff \`⭐⭐⭐⭐⭐\``)
.setColor(config.color)
.setThumbnail(config.thumbnail)
.setFooter({
   text: `${client.user.username}`,
   iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
 });
    interaction.update({embeds:[],components: [], content: `Review submited thanks for choosing to leave a review`})
    client.channels.cache.get(config.ReviewChannel).send({
        embeds: [NotifyUser],
  
      });
    }}

}




}
    }