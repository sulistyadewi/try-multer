const express = require("express");
const app = express();
const port = 3005;
const router = require("./routes/index");

app.use(express.static("uploads"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
