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
  
  const config = require("../../config.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("adduser")
      .setDescription("Add a user to the ticket")
      .setDMPermission(false)
      .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)),
    run: async (client, interaction) => {
      const target = interaction.options.getMember('target');
      var chanuser = interaction.channel.topic
      var categoryid = interaction.channel.parentId
try{
      var userid = target.id
}catch{
      interaction.reply({content: `*Could not find that user*`, ephemeral: true})
      return
      }


      global.DataRole = '0'
      if (categoryid == config.SelectMenu1Category){global.DataRole = config.SelectMenu1Role}
      if (categoryid == config.SelectMenu2Category){global.DataRole = config.SelectMenu2Role}
      if (categoryid == config.SelectMenu3Category){global.DataRole = config.SelectMenu3Role}
      if (categoryid == config.SelectMenu4Category){global.DataRole = config.SelectMenu4Role}
      if (categoryid == config.SelectMenu5Category){global.DataRole = config.SelectMenu5Role}
      if (categoryid == config.TicketCategory){global.DataRole = config.StaffRole} // "simple config" only

      if (interaction.member.roles.cache.has(DataRole)){ 
 if (interaction.channel.name.includes('ticket-')){
    interaction.channel.permissionOverwrites.edit(target.id, { ViewChannel: true });
    Embed = new EmbedBuilder()
        .setTitle(`Tickets | Management`)
        .setDescription(`<@${interaction.user.id}> Added <@${target.id}> to the ticket`)
        .setColor(config.color)
        .setThumbnail(config.thumbnail)
        .setFooter({
          text: `${client.user.username}`,
          iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
        });    
        interaction.reply({embeds:[Embed]})
    return;
 }
      }else{
        if (interaction.channel.name.includes(`ticket-`)){
            if (interaction.user.id == chanuser){
                interaction.channel.permissionOverwrites.edit(target.id, { ViewChannel: true });
                Embed = new EmbedBuilder()
                .setTitle(`Tickets | Management`)
                .setDescription(`<@${interaction.user.id}> Added <@${target.id}> to the ticket`)
                .setColor(config.color)
                .setThumbnail(config.thumbnail)
                .setFooter({
                  text: `${client.user.username}`,
                  iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
                });    
                interaction.reply({embeds:[Embed]})
                return;
    
            }
    
            else{
                interaction.reply({content:"Only the owner of the ticket can add other users!", ephemeral: true})    
             }
    
    
            }
            else{
            interaction.reply({content:"This channel is not a ticket!", ephemeral: true})    
            return;
         }
     }


   


    }}