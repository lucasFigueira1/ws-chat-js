import WebSocket from "ws";

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", function (socket) {
  //
});

server.on("error", function (error) {
  console.error("error", error);
});
