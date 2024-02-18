const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { Query } = require('pg');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  console.log("In put on server");
  let id = req.params.id;
  console.log(id);
  let queryText = `Update "gallery"
  Set "likes" = "likes" + 1
  Where "id" = $1;`

  pool.query(queryText, [id])
  .then((result) =>{
    console.log('PUT query worked', result);
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('put query failed', err);
    res.sendStatus(500);
  })
});

// GET /gallery
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM gallery;`;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log(`Error making DB query ${queryText}`, err);
    res.sendStatus(500);
  })
});

module.exports = router;
