const fs = require('fs');

const buildDatabase = () => {
    const dbConnection = require('./db_connection');
    const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

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