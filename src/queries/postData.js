const dbConnection = require("../database/db_connection.js");

const postData = (programmeName, description, length, continuity, cb) => {
    dbConnection.query('INSERT INTO programmes (programme_name, description, length, continuity) VALUES ($1, $2, $3, $4);',
        [programmeName, description, length, continuity],
        (err, res) => {
            if (err) return cb(err);
            console.log("in the postData")
            cb(null, res);
        });
};

module.exports = postData;

// programmeName,
// description,
// length,
// continuity

// AND INSERT INTO users (userName) VALUES ($5)