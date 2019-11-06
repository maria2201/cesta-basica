const express = require("express");

const mongoose = require("mongoose");

const server = express();

server.use(express.json());

mongoose.connect("mongodb://localhost:27017/trabalho", {
    useNewUrlParser:true,
    useUnifieTopology:true
});

const routes = require("./routes");
server.use(routes);
server.listen(3333);