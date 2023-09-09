const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(6500, () => {
  console.log('Server listening on port 6500');
});

const wss = new WebSocket.Server({ server });
const clients = [];
var isOn=false;
wss.on('connection', (ws) => {
  console.log('New connection');
  
  // Add client to the list of connected clients
  clients.push(ws);

  // Send initial flashlight state to newly connected device
  ws.send(JSON.stringify({ type: 'flashlight', isOn }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);
console.log(data.type)
    if (data.type === 'ngo') {
      // Toggle flashlight state
      isOn = !isOn;

      // Broadcast flashlight state to all connected devices
      const broadcastMessage = JSON.stringify({ type: 'ngo', title:data.titl,address:data.address,priority:data.priority });
      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(broadcastMessage);
        }
      });
    }
  });

  ws.on('close', () => {
    console.log('Connection closed');
    
    // Remove client from the list of connected clients
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});
