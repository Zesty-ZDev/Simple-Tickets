const { EmbedBuilder, PermissionsBitField, TextInputStyle, TextInputBuilder, ModalBuilder, ActionRowBuilder, ButtonBuilder} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require('../../config.js');
const pluck = require("pluck");
module.exports = {
    name: 'interactionCreate',
    execute: async (interaction) => {
        let client = interaction.client;
//Transaction ID Modal Submit
        if (interaction.isModalSubmit()){
        if (interaction.customId === 'TransactionIDMODAL') {
            let TransactionIDValue = interaction.fields.getTextInputValue('TransactionIDInput')


const FailedEmbed = new EmbedBuilder()
.setDescription(`Failed to find Transaction ID : \`${TransactionIDValue}\` \n\n *Please ensure the Transcation ID is correct and try again*`) 
.setTitle(`${client.user.username}`)
.setColor(config.color)
.setFooter({text:`${client.user.username} by Z-Dev`})
const Button = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setLabel('Try Again')
    .setCustomId('tryagain')
    .setStyle('Secondary'),
);



const get = { method: "GET", headers: { 'X-Tebex-Secret': config.tebexApi } };
  
const transaction = await fetch(`https://plugin.tebex.io/payments/${TransactionIDValue}`, get);
const transactiondata = await transaction.json();
if(transactiondata.error_code) {
interaction.reply('Error')
return;}

if(transactiondata.id == null){ 
interaction.reply({embeds:[FailedEmbed],components:[Button]}) 
return;}

        const array = pluck('name')
        const namestring = array(transactiondata.packages)

const TransactionEmbed = new EmbedBuilder()
    .setColor(config.color)
    .setTitle(`Transaction Details Below`)
    .setDescription(`${transactiondata.player.name} | ${transactiondata.email}`)
	.addFields(
		{ name: 'Transaction Status', value: `*${transactiondata.status}*` },
		{ name: 'Product', value: `${namestring}`, inline: true },
		{ name: 'Amount', value: `${transactiondata.amount} ${transactiondata.currency.iso_4217}`, inline: true },
	)
 
interaction.reply({embeds: [TransactionEmbed]})
    
        }}

        if (interaction.isButton()) {
            if (interaction.customId == `tryagain`) {
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


        }}

        if (interaction.isButton()) {
                if (interaction.customId == `verifyticket`) {
                    const TransactionIdModal = new ModalBuilder()
                    .setCustomId('TransactionIDMODAL2')
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
    
    
        }}


//Transaction ID Modal Submit 2
       if (interaction.isModalSubmit()){
    if (interaction.customId === 'TransactionIDMODAL2') {
        let TransactionIDValue = interaction.fields.getTextInputValue('TransactionIDInput')


const FailedEmbed = new EmbedBuilder()
.setDescription(`Failed to find Transaction ID : \`${TransactionIDValue}\` \n\n *Please ensure the Transcation ID is correct and try again*`) 
.setTitle(`${client.user.username}`)
.setColor(config.color)
.setFooter({text:`${client.user.username} by Z-Dev`})


const get = { method: "GET", headers: { 'X-Tebex-Secret': config.tebexApi } };

const transaction = await fetch(`https://plugin.tebex.io/payments/${TransactionIDValue}`, get);
const transactiondata = await transaction.json();
if(transactiondata.error_code) {
interaction.reply('Error')
return;}

if(transactiondata.id == null){ 
interaction.reply({embeds:[FailedEmbed]}) 
return;}

    const array = pluck('name')
    const namestring = array(transactiondata.packages)

const TransactionEmbed = new EmbedBuilder()
.setColor(config.color)
.setTitle(`Transaction Details Below`)
.setDescription(`${transactiondata.player.name} | ${transactiondata.email}`)
.addFields(
    { name: 'Transaction Status', value: `*${transactiondata.status}*` },
    { name: 'Product', value: `${namestring}`, inline: true },
    { name: 'Amount', value: `${transactiondata.amount} ${transactiondata.currency.iso_4217}`, inline: true },
)

interaction.reply({embeds: [TransactionEmbed]})

       }}




    }
}