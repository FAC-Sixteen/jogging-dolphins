const dbConnection = require("../database/db_connection.js");

const postPassword = (name, password, cb) => {
    dbConnection.query('INSERT INTO users (name, password) VALUES ($1, $2);',
        [name, password],
        (err, res) => {
            if (err) return cb(err);
            console.log("in the postPassword");
            cb(null, res);
        });
};

module.exports = postPassword;