const WebSocketServer = require('ws').Server;

module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  // * TODO: Make sure to return an instance of a WebSocketServer,
  //         which contains `close()` method.

  const wsServer = new WebSocketServer({ port: WEBSOCKET_PORT });

 
  wsServer.on('connection', (ws) => {
    ws.on('message', (message) => {
      const update = JSON.parse(message);

      stepService.add(update.username, update.ts, update.newSteps);
    });
  }
  );


  return wsServer;
};
