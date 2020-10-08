require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { log, logInfos } = require("./libs/utils");
const sql = require("./db.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logInfos);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to this shitty application." });
});

//SELECT ALL

app.get("/categories", (req, res) => {
  sql.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/questions", (req, res) => {
  sql.query("SELECT * FROM question", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/reponses", (req, res) => {
  sql.query("SELECT * FROM reponse", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/roles", (req, res) => {
  sql.query("SELECT * FROM role", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/tags", (req, res) => {
  sql.query("SELECT * FROM tags", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/users", (req, res) => {
  sql.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/votes", (req, res) => {
  sql.query("SELECT * FROM vote", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//SELECT id
app.get("/categories/:id", (req, res) => {
  sql.query(
    "SELECT * FROM categories WHERE categorie_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/questions/:id", (req, res) => {
  sql.query(
    "SELECT * FROM question WHERE question_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});
app.get("/reponses/:id", (req, res) => {
  sql.query(
    "SELECT * FROM reponse WHERE reponse_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});
app.get("/roles/:id", (req, res) => {
  sql.query(
    "SELECT * FROM role WHERE role_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});
app.get("/tags/:id", (req, res) => {
  sql.query(
    "SELECT * FROM tags WHERE tag_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});
app.get("/users/:id", (req, res) => {
  sql.query(
    "SELECT * FROM user WHERE user_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});
app.get("/votes/:id", (req, res) => {
  sql.query(
    "SELECT * FROM vote WHERE vote_id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  log(`Server is listening on ${process.env.PORT}`);
});
