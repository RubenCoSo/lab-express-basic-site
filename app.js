const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.listen(3500, () => console.log("My first app listening on port 3500! "));
