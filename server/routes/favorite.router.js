const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "id";`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error in GET", error);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  console.log("in Favorite POST");
  const url = req.body.url;
  const categoryName = req.body.category_name;
  const query = `INSERT INTO "favorites" ("url", "category_name")
  VALUES ($1, $2);`;
  pool
    .query(query, [url, categoryName])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("ERROR IN POST", err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/favId", (req, res) => {
  const queryText = `DELETE FROM "favorites" WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.favID])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error detected in DELETE", error);
    });
});

module.exports = router;
