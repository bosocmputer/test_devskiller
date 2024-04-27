const express = require('express');

module.exports = (stepService) => {
  const REST_PORT = 8080;

  const app = express();
  app.get('/users/:username/steps', (req, res) => {
    const username = req.params.username;
    const user = stepService.get(username);

    if (!user) {
      res.status(404).json({ error: `User doesn't exist` }); // Send 404 status when user is not found
    } else {
      res.json(user);
    }
  });

  const server = app.listen(REST_PORT, () => console.log(`Server running on port ${REST_PORT}`));

  return {
    close: () => server.close(),
  };
};
