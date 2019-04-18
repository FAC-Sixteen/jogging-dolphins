const dbConnection = require("../database/db_connection.js");

const getLogin = (name, cb) => {
    dbConnection.query(`SELECT password FROM users WHERE name = '${name}';`,
        (err, res) => {
            if (err) cb(err);
            const hashedPassword = res.rows.slice();
            cb(null, hashedPassword);
        });
};

module.exports = getLogin;