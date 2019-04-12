const dbConnection = require("../database/db_connection.js");

const getData = cb => {
    dbConnection.query('SELECT programme_name, description, length, continuity FROM programmes', (err, res) => {
        if (err) {
            console.log("GET data error: ", err);
            cb(err);
        } else {
            const suggestions = res.rows.slice();
            cb(null, suggestions)
        }
    })
}

module.exports = getData;

//'SELECT programme_name, description, length, continuity, users.name FROM programmes INNER JOIN users ON user_id = users.id;'