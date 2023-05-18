module.exports = {
    "token": "",//Required Bot Token found on discord dev portal

    "tebexApi":"",

    "ServerName": "", //Required
    "thumbnail": "https://",//Required IMG link
    "color": "#//",//Required HEX
    


    //Set both of the below options to "True" to set the bot to a "simple config" this will simply just be click & open
    //If wish to have Select menus with set "NoSelectMenu" to "false"
    "NoSelectMenu": false,

    "StaffRole": "", //this is only used if the ticket system is in a "simple config" this will determine the role that can view all tickets created , Not required if "NoSelectMenu" is set to "false"
    "TicketCategory":"", //this is only used if the ticket system is in a "simple config" this will determine the category / parent the newly opened tickets will be created under , Not required if "NoSelectMenu" is set to "false"

/////////////////////////////////////// Select Menu Below ///////////////////////////////////////

    //Ensure "NoSelectMenu is set to "false" to use the below select menu functions
    //SelectMenu1Label will set the label for the first option of the select menu this label supports standard text plus unicode 
    "SelectMenu1Label": "",
    //SelectMenu1Description will set the description for the first select menu this wil appear below the label 
    "SelectMenu1Description": "",
    //SelectMenu1Role will set the discord role that can view the newly opened ticket this will need to  be the channel ID not the name
    "SelectMenu1Role": "",
    //SelectMenu1Category will set the category / parent the newly opened ticket will appear under this will need to be the category ID not the name
    "SelectMenu1Category": "",

    //SelectMenu2Label will set the label for the second option of the select menu this label supports standard text plus unicode 
    "SelectMenu2Label": "",   
    //SelectMenu2Description will set the description for the second select menu this wil appear below the label 
    "SelectMenu2Description": "",
    //SelectMenu2Role will set the discord role that can view the newly opened ticket this will need to  be the channel ID not the name
    "SelectMenu2Role": "",
    //SelectMenu2Category will set the category / parent the newly opened ticket will appear under this will need to be the category ID not the name
    "SelectMenu2Category": "",

    //SelectMenu3Label will set the label for the third option of the select menu this label supports standard text plus unicode 
    "SelectMenu3Label": "",
    //SelectMenu3Description will set the description for the third select menu this wil appear below the label 
    "SelectMenu3Description": "",
    //SelectMenu3Role will set the discord role that can view the newly opened ticket this will need to  be the channel ID not the name
    "SelectMenu3Role": "",
    //SelectMenu3Category will set the category / parent the newly opened ticket will appear under this will need to be the category ID not the name
    "SelectMenu3Category": "",

    //SelectMenu4Label will set the label for the fourth option of the select menu this label supports standard text plus unicode 
    "SelectMenu4Label": "",
    //SelectMenu4Description will set the description for the fourth select menu this wil appear below the label 
    "SelectMenu4Description": "",
    //SelectMenu4Role will set the discord role that can view the newly opened ticket this will need to  be the channel ID not the name
    "SelectMenu4Role": "",
    //SelectMenu4Category will set the category / parent the newly opened ticket will appear under this will need to be the category ID not the name
    "SelectMenu4Category": "",

    //SelectMenu5Label will set the label for the fifth option of the select menu this label supports standard text plus unicode 
    "SelectMenu5Label": "",
    //SelectMenu5Description will set the description for the fifth select menu this wil appear below the label 
    "SelectMenu5Description": "",
    //SelectMenu5Role will set the discord role that can view the newly opened ticket this will need to  be the channel ID not the name
    "SelectMenu5Role": "",
    //SelectMenu5Category will set the category / parent the newly opened ticket will appear under this will need to be the category ID not the name
    "SelectMenu5Category": "",

/////////////////////////////////////// Misc Functions Below ///////////////////////////////////////
    
    //TranscriptChannel will set the channel the ticket transcripts are sent to after the ticket deleted this will need to  be the channel ID not the name, this is required as a discord id / snowflake
    "TranscriptChannel": "",


    //ReviewEnabled will enable the review system and DM a user prompting a star rating between 1-5 upon closing, Set this option to "false" if you wish for this not to happen, this required a "true" or "false" input
    "ReviewEnabled": true,

    //ReviewChannel will set the channel completed reviews are sent to after a user submits the reiew this will need to  be the channel ID not the name, this is not required if the above is set to "false"
    "ReviewChannel": ""

  }