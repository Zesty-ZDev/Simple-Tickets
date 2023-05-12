const path = require('path');
const dbPath = path.resolve(__dirname, 'database.db')
const sqlite3 = require('sqlite3').verbose();

//Exporting the path for other scripts to use
module.exports = {
  "path": dbPath
}

let sql;

//Connecting to local Database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})

//Checking if DataBase Has Table "DataBaseManager"
sqlcheck = ("SELECT 'DiscordID' FROM 'Tickets'")
db.all(sqlcheck, [], (err, rows) => {
  if (err) {

    console.log(" - Assembling DataBase")
    //Building Database if true
    setTimeout(() => {
      sql = 'CREATE TABLE "Tickets" ("DiscordID" TEXT)';
      db.run(sql);
      console.log(' - Ticket Manager Table Created Successfully')
    }, 10);
    setTimeout(() => {
      sql = 'INSERT INTO "Tickets" ("DiscordID") Values (?)';
      db.run(sql, ['PH'], (err) => {
        if (err) return console.error(err.message);
      });
    }, 300);
    //
  } else {
    console.log(" - DataBase Already Assembled"), console.log("  ")
  }
})