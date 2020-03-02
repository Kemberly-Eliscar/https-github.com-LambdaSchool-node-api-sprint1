const express = require("express");
const ProjectRouter = require("./routers/project");
const ActionRouter = require("./routers/actions");
const helmet = require("helmet");

//setting middleware as our server
const server = express();


const port = 7000;

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/actions", ActionRouter);
server.use("/", (req, res, next)=>{
  res.json('Hello')
});


server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
module.exports = server;