const {
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    PermissionsBitField,
    PermissionFlagsBits
  } = require("discord.js");
  const {
    SlashCommandBuilder
  } = require("@discordjs/builders");
  
//DataBase Connection
const dbPath = require("../database/database.js")
const sqlite3 = require('sqlite3').verbose();
//Connecting to local Database
const db = new sqlite3.Database(dbPath.path, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})
let sql;


  const config = require("../../config.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("resetuser")
      .setDescription("Resets a user from the ticket system ")
      .setDMPermission(false)
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
      .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)),
    run: async (client, interaction) => {

      const target = interaction.options.getMember('target');

        const embed1 = new EmbedBuilder()
        .setTitle(`Tickets | Management`)
        .setDescription(`Resetting <@${target.user.id}>\n\n*If this user has a ticket open note they will be able to open a second ticket*`)
        .setColor(config.color)
        .setThumbnail(config.thumbnail)
        .setFooter({
          text: `${client.user.username}`,
          iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
        });       
        
        const embed2 = new EmbedBuilder()
        .setTitle(`Tickets | Management`)
        .setDescription(`Failed to Reset <@${target.user.id}>\n\n*This is likely because the user is not blacklisted*`)
        .setColor(config.color)
        .setThumbnail(config.thumbnail)
        .setFooter({
          text: `${client.user.username}`,
          iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
        }); 


        sqlcheck = (`SELECT EXISTS(SELECT DiscordID FROM Tickets WHERE DiscordID = (?));`)
        db.all(sqlcheck, [`${target.user.id}`], async (err, row) => {
          if (err){console.log(err)}else{
            let string = JSON.stringify(row)
            let stringcut = string.slice(-3, -2)
            if(stringcut == `1`){
            interaction.reply({embeds:[embed1]})
            sqlcheck = (`DELETE FROM Tickets WHERE DiscordID = (?);`)
                    db.all(sqlcheck, [`${target.user.id}`], async (err, row) => {
                      if (err){console.log(err)}})
          }
            else{     
        interaction.reply({embeds:[embed2]}) 
    }}
})
    }}