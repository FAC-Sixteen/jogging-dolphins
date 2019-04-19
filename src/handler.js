const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const postData = require('./queries/postData');
const postPassword = require('./queries/postPassword');
const getLogin = require('./queries/getLogin');
const getData = require('./queries/getData');
const encryption = require('./encryption');

const serverError = res => {
  res.writeHead(500, {
    'content-type': 'text/html'
  });
  res.end('<h1>Server cannot fulfill your request.</h1>');
};

const handleHomeRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'index.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        });
        res.end(file);
      }
    }
  );
};

const handle404Route = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'error.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(404, {
          'content-type': 'text/html'
        });
        res.end(file);
      }
    }
  );
};

const handlePublicRoute = (req, res, endpoint) => {
  const extensionType = endpoint.split('.')[1];
  const extensionSelector = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    otf: 'font/otf',
    ttf: 'font/ttf'
  };
  fs.readFile(path.join(__dirname, '..', endpoint), (err, file) => {
    if (err) {
      serverError(res);
    } else {
      res.writeHead(200, {
        'content-type': extensionSelector[extensionType]
      });
      res.end(file);
    }
  });
};

const handlePostRoute = (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const {
      programmeName,
      description,
      length,
      continuity
    } = queryString.parse(data);

    postData(programmeName, description, length, continuity, err => {
      if (err) return serverError(res);
      res.writeHead(302, {
        Location: '/#suggestions'
      });
      res.end();
    });
  });
};

const handleGetDataRoute = (req, res) => {
  getData((err, suggestions) => {
    if (err) {
      serverError(res);
    }
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(suggestions));
  });
};

const handleRegister = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'registration-form.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        });
        res.end(file);
      }
    }
  );
};

const handleLogin = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'login-form.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        });
        res.end(file);
      }
    }
  );
};

const handleRegisterPost = (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const regData = queryString.parse(data);
    const userName = regData.username;
    const password = regData.psw;
    encryption.hashPassword(password)
    .then(hash => postPassword(userName, hash))
    .then( () => {
      res.writeHead(302, {Location: '/'});
      res.end();
  })
    // .catch(err => reject(err));
  });
};

const handleLoginPost = (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const logData = queryString.parse(data);
    const userName = logData.username;
    const password = logData.psw;
    getLogin(userName, password)
    .then(pwArray => encryption.comparePasswords(pwArray[1], pwArray[0][0].password))
    .then(result => {
      if (result == false){
        console.log(result);
      } 
      else {
        res.writeHead(302, { Location: '/'});
        res.end();
      }
    })
    // .catch(err => reject(err));
  })
}


module.exports = {
  handleHomeRoute,
  handle404Route,
  handlePublicRoute,
  handlePostRoute,
  handleGetDataRoute,
  handleRegister,
  handleRegisterPost,
  handleLogin,
  handleLoginPost
};
