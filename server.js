const express = require("express");
const app = express();
const PORT = 8080;
const HOST = "localhost";

if (process.env.NODE_ENV !== "production") {
  let livereload = require("livereload");
  let connectLiveReload = require("connect-livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
}

app.use(express.static("client"));

app.listen(PORT, HOST, () =>
  console.log(`Server running on: http://${HOST}:${PORT}`)
);
