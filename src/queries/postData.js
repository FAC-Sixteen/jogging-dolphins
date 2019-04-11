const dbConnection = require("../database/db_connection.js");

const postData = (programmeName, description, length, continuity, usersDotName, cb) => {
    dbConnection.query('INSERT INTO programmes (programmeName, description, length, continuity, usersDotName) VALUES ($1, $2, $3, $4, $5)',
        [programmeName, description, length, continuity, usersDotName],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        });
};

module.exports = postData;