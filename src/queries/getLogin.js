const dbConnection = require("../database/db_connection.js");

const getLogin = (name, password) => {
    return new Promise ((resolve, reject) => {
    dbConnection.query(`SELECT password FROM users WHERE name = '${name}';`)
    .then(pwArray => resolve([pwArray.rows.slice(), password]))
    .catch(err => reject(err))
    })
};

module.exports = getLogin;