const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');

const sqlPath = path.join(`${__dirname}/db_build.sql`);
const sql = fs.readFileSync(sqlPath).toString();

const buildDatabase = () => {

    dbConnection.query(sql, (err, result) => {
        if (err) {
            console.log('Database creation error: ', err)
        } else {
            console.log("Database created");
            dbConnection.end(() => {
                console.log("Connection closed")
            })
        }
    })
};

buildDatabase();

module.exports = buildDatabase;