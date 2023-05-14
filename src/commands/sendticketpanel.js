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
    .setName("sendticketpanel")
    .setDescription("sends ticket panel")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  run: async (client, interaction) => {


    const embed = new EmbedBuilder()
      .setTitle(`Tickets`)
      .setDescription(`Click the button below to create a ticket`)
      .setColor(config.color)
      .setThumbnail(config.thumbnail)
      .setFooter({
        text: `${client.user.username}`,
        iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp`
      });
    const button = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
        .setCustomId('OpenTicketButton')
        .setLabel('Open Ticket')
        .setEmoji('✉️')
        .setStyle('Secondary'),
      );
    //Do not remove credits!
    interaction.channel.send({
      embeds: [embed],
      components: [button]
    })
    interaction.reply({content:"Ticket panel sent, you can dismiss this message", ephemeral: true})
  }
};