const { EmbedBuilder, PermissionsBitField, TextInputStyle, TextInputBuilder, ModalBuilder, ActionRowBuilder} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("transaction")
    .setDescription("Verify a transaction"),
    run: async (client, interaction) => {

      const TransactionIdModal = new ModalBuilder()
      .setCustomId('TransactionIDMODAL')
      .setTitle('Transactions');

  const TransactionInput = new TextInputBuilder()
      .setCustomId('TransactionIDInput')
      .setLabel("Enter The Transaction ID Below")
      .setMaxLength(100)
      .setRequired(true)
      .setPlaceholder("Transaction ID")
      .setStyle(TextInputStyle.Short)

      const TransactionRow = new ActionRowBuilder().addComponents(TransactionInput);
      TransactionIdModal.addComponents(TransactionRow)

      interaction.showModal(TransactionIdModal)

    }
 };
