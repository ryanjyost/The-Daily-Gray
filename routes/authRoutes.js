const express = require('express'),
      authRouter = express.Router();

  authRouter.route('/signUp')
    .post((req, res) => {
     	console.log(req.body)
    });

    // .get((req, res) => {
    //   res.send('adding a Publication')
    // })

module.exports = authRouter;