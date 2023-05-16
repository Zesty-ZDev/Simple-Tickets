

# Simple Tickets by Zdev
Simple Tickets featuring a simple setup using a self building database and simple config allowing for easy ticket opening all the way to select menus with advanced modal questionnaires with html transcripts and client reviews, the system itself will be modular and intuitive with the setup so even a basic user can have an advanced ticketing system simply

### Z-Dev Discord
Join [Here](https://discord.gg/EV9cpmp6qf) for support


## FAQ
#### How do I add another user to a ticket?

Adding another user to a ticket is as simple as /adduser then the select the user from the list note that only the user that opened the ticket and staff with the role assigned to manage that ticket category can add other users

#### Why can't one of my members cannot open a ticker?

If a user is informed they currently have another ticket open they likely already had a ticket open prior and ticket was closed improperly either using discord by deleting the channel or using another bot however if the ticket bot does not close the ticket itself the user will remain in the selfbuilt database of open ticket holders to rectify this issue run the /resetuser command followed by the users name this will clear the user from the database 

#### What is the "simple config" option listed in the config?

The simple config option is enabled when the "NoSelectMenu" option is set to "true" this means that the ticket system will simply open a ticket when a user clicks the button with no category selection meaning oyu do not have to do any of the config marked "Select Menu Below", however it is required still do the section marked "Misc Functions Below" still as some of these options are required

#### What is a SelectMenu?

A Select Menu is a drop down that allows you to select from 1 of 5 options listed clearly by their labels and description each option has a custom value the script will then respond appropriately for the option the user selected.

#### Do I need to have all 5 options in the Select Menu?

To adjust how many select menu options there is enabled simply go into src/events/buttonCreate.js and to remove rows clear between the rows you want to remove ensuring you do this from highest row to lowest ensuring you still leave at least 1 row else the bot will crash

#### What is a category / parent?

The category / parent is the category the newly created channel will form under in this situation the channel being the just opened ticket

#### What is a Discord Id / Snowflake?

A Snowflake is a unique ID for a resource which contains a timestamp
To copy a snowflake, you must have Developer Mode enabled in Discord.

#### Why am I getting a DisallowedIntents error?

The Bot requires the "SERVER MEMBERS INTENT" enabled in the discord developer portal. To do this head to the developer portal and select your application then select bot and scroll down to enable and disabled intents at this time however the bot only needs the "SERVER MEMBERS INTENT" enabled
