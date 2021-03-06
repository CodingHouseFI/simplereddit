'use strict';

// routes/posts.js  -  post router

const express = require('express');
let router = express.Router();

let Post = require('../models/post');

router.get('/', (req, res) => {
  Post.getAll()
    .then(posts => {
      res.send(posts);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post('/', (req, res) => {
  Post.create(req.body)
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

//  PUT /posts/68df7fd1-44b5-42f4-b1cd-745d912b6871/upvote


// router.put('/:id/upvote', (req, res) => {
//   Post.upvote(req.params.id)
//     .then()
  
// })

// router.put('/:id/downvote', (req, res) => {

// })



module.exports = router;
