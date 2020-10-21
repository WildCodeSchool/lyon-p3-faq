const express = require("express");
const app = express();
const port = 3001;
const indexRouter = require("./routes/index");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
