const bcrypt = require('bcryptjs');

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10)
    .then(generatedSalt => bcrypt.hash(password, generatedSalt))
    .then(hash => resolve(hash))
    .catch(err => reject(err))
  })
};

const comparePasswords = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {  
    bcrypt.compare(password, hashedPassword)
    .then(result => resolve(result))
    .catch(err => reject(err));  
  })
};

module.exports = {
  hashPassword,
  comparePasswords
};
