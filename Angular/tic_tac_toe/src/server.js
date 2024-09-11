const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let players = [];

server.on('connection', (socket) => {
  if (players.length < 2) {
    players.push(socket);

    if (players.length === 2) {
      players[0].send(JSON.stringify({ type: 'start', player: 'X' }));
      players[1].send(JSON.stringify({ type: 'start', player: 'O' }));
    }

    socket.on('message', (message) => {
      const data = JSON.parse(message);
      players.forEach((player) => {
        if (player !== socket) {
          player.send(message);
        }
      });
    });

    socket.on('close', () => {
      players = players.filter((player) => player !== socket);
    });
  } else {
    socket.send(JSON.stringify({ type: 'error', message: 'Room is full' }));
    socket.close();
  }
});

console.log('WebSocket server is running on ws://localhost:8080');
