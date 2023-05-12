const { ActivityType } = require("discord.js")

//DataBase Connection
const dbPath = require("../database/database.js")
const sqlite3 = require('sqlite3').verbose();
//Connecting to local Database
const db = new sqlite3.Database(dbPath.path, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})
let sql;


module.exports = {
	name: 'ready',
	once: true,
	execute(client) {


      client.user.setActivity({ name: `Tickets | Z-Dev`, type: ActivityType.Watching })





}};
