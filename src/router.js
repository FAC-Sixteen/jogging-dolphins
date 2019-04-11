const handler = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  const method = req.method;

  if (method === 'GET') {
    if (endpoint === '/') {
      handler.handleHomeRoute(req, res);
    } else if (endpoint.includes('/public')) {
      handler.handlePublicRoute(req, res, endpoint);
    } else {
      handler.handle404Route(req, res);
    }
  } else if (method === 'POST') {
    if (endpoint === '/submit-form') {
      handler.handlePostRoute(req, res);
    }
  }
};

module.exports = router;
