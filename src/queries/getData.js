const dbConnection = require("../database/db_connection.js");

const getData = cb => {
    dbConnection.query('SELECT programme_name, description, length, continuity, users.name FROM programmes INNER JOIN users ON user_id = users.id;', (err, res) => {
        if (err) {
            console.log("GET data error: ", err);
            cb(err);
        } else {
            const suggestions = result.rows.slice();
            cb(null, suggestions)
        }
    })
}

module.exports = getData;