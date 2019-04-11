const handler = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  if (endpoint === '/') {
    handler.handleHomeRoute(req, res);
  } else if (endpoint.includes('/public')) {
    handler.handlePublicRoute(req, res, endpoint);
  } else {
    handler.handle404Route(req, res);
  }
};

module.exports = router;
