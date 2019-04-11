const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');


// const buildDatabase = () => {
const sqlPath = path.join(`${__dirname}/db_build.sql`);

if (process.env.NODE_ENV === 'test'){
    sqlPath = path.join(`${__dirname}/db_build_test.sql`);
};

const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => dbConnection.query(sql, cb);

module.exports = runDbBuild;    






// const buildDatabase = () => {

//     dbConnection.query(sql, (err, result) => {
//         if (err) {
//             console.log('Database creation error: ', err)
//         } else {
//             console.log("Database created");
//             dbConnection.end(() => {
//                 console.log("Connection closed")
//             })
//         }
//     })
// };
// buildDatabase();

// module.exports = buildDatabase;