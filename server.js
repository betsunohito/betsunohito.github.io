const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT || 3000;

// Serve static files (your portfolio)
app.use(express.static(path.join(__dirname)));

io.on('connection', (socket) => {
  console.log('a client connected', socket.id);

  socket.on('chat:message', (data) => {
    // expect { name, text, clientId }
    const msg = {
      id: Date.now() + '-' + Math.random().toString(36).slice(2,6),
      name: data.name || 'Anon',
      text: data.text || '',
      clientId: data.clientId || socket.id,
      ts: Date.now()
    };
    // Broadcast to all connected clients (including sender)
    io.emit('chat:message', msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
