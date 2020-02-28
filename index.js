const express = require("express");
const ProjectRouter = require("./routers/project");
const ActionRouter = require("./routers/actions");
const helmet = require("helmet");

const server = express();

const host = "0.0.0.0";
const port = 7000;

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/actions", ActionRouter);

server.listen(port, host, () => {
  console.log(`Running at http://${host}:${port}`);
});
module.exports = server;