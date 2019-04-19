const dbConnection = require("../database/db_connection.js");

const postPassword = (name, password) => {
    return new Promise ((resolve, reject) => {
        dbConnection.query('INSERT INTO users (name, password) VALUES ($1, $2);',
        [name, password])
        .then(inserted => resolve(inserted))
        .catch(err => reject(err));

    })

};

module.exports = postPassword;