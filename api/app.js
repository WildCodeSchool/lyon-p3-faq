const cookieParser = require("cookie-parser");
const express = require("express");
const httpErrors = require("http-errors");
const logger = require("morgan");
const path = require("path");
let cors = require("cors");
require("dotenv/config");
let bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const frontRouter = require("./routes/front/index");
const userRouter = require("./routes/backoffice/user");
const postRouter = require("./routes/backoffice/post");
const loginRouter = require("./routes/backoffice/login");

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Router middleware
app.use("/", indexRouter);
app.use("/front", frontRouter);
app.use("/back/users", userRouter);
app.use("/back/posts", postRouter);
app.use("/back/login", loginRouter);

app.set("views", path.join(__dirname, "views"));

// view engine setup
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
