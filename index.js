const {
    Client,
    Collection,
    GatewayIntentBits,
    Partials,
    ChannelManager
} = require("discord.js");
const client = new Client({
    intents: ['Guilds']
});

const config = require("./config");
const {
    readdirSync
} = require("fs")

const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v10');
require('./src/database/database.js')
const path = require('path');


const MainPath = path.resolve(__dirname)

let token = config.token

client.commands = new Collection()

const rest = new REST({
    version: '10'
}).setToken(token);


const commands = [];
readdirSync(`${MainPath}/src/commands`).forEach(async file => {
    const command = require(`./src/commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
})



client.on("ready", async () => {
    try {
        await rest.put(
            Routes.applicationCommands(client.user.id), {
                body: commands
            },
        );
    } catch (error) {
        console.error(error);
    }

})


readdirSync('./src/events').forEach(async file => {
    const event = require(`./src/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
})

client.login(token)