const express = require('express'),
      userRouter = express.Router(),
      passport = require('passport');


userRouter.use('/', function(req, res, next){
  if(!req.user){
    res.redirect('/')
  }

  next();
})

userRouter.route('/')
  .get((req, res) => {
    res.render('pages/users',
      {user:
        {
          name: req.user.displayName,
          image: req.user.image
        }
      }
    )
  })






module.exports = userRouter;