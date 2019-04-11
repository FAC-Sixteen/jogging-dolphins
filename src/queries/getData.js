/// SELECT statemet here might not be right - it was not tested on the database

const dbConnection = require('../database/db_connection.js');

const getData = cb => {
  dbConnection.query(
    'SELECT programme_name, description, length, continuity, users.name FROM programmes INNER JOIN users ON programmes.user_id = users.id;',
    (err, res) => {
      if (err) {
        console.log('GET data error: ', err);
        cb(err);
      } else {
        const suggestions = res.rows.slice();
        cb(null, suggestions);
      }
    }
  );
};

module.exports = getData;
