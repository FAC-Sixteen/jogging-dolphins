const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const postData = require('./queries/postData');
const getData = require('./queries/getData');

const serverError = res => {
  res.writeHead(500, { 'content-type': 'text/html' });
  res.end('<h1>Server cannot fulfill your request.</h1>');
};

const handleHomeRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'index.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(200, { 'content-type': 'text/html' });
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
        res.writeHead(404, { 'content-type': 'text/html' });
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
      res.writeHead(200, { 'content-type': extensionSelector[extensionType] });
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
      userName,
      programmeName,
      description,
      length,
      continuity
    } = queryString.parse(data);

    postData(userName, programmeName, description, length, continuity, err => {
      if (err) return serverError(res);
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  });
};

const handleGetDataRoute = (req, res) => {
  getData((err, database) => {
    if (err) return serverError(err, response);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(database));
  });
};

module.exports = {
  handleHomeRoute,
  handle404Route,
  handlePublicRoute,
  handlePostRoute,
  handleGetDataRoute
};
