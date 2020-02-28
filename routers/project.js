const express = require("express");
const db = require("../data/helpers/projectModel");

const router = express.Router();

// GET request for all projects
router.get("/", (req, res) => {
  db.get(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

//GET projects by ID
router.get("/:id", (req, res) => {
  db.get(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// GET request for actions on specific ID on project
router.get("/:id/actions", (req, res) => {
  db.getProjectActions(req.params.id)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Couldn't find project by this id"
      });
    });
});

// POST request to add a new project
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Couldn't add projects"
      });
    });
});
// PUT request to update a project by id
router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Couldn't update project with this id"
      });
    });
});

// DELETE request to delete a project
router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(data => {
      console.log(data);
      res.status(204).json({
        message: "project was deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Couldn't find project by this id"
      });
    });
});

module.exports = router;