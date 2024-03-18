const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const accessEnv = require("./accessEnv");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);

const PORT = 5005;

const listener = app.listen(PORT, "0.0.0.0", () => {
  console.info(`API gateway listening on port ${listener.address().port}`);
});
