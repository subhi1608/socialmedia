const router    = require('express').Router();
const passport  = require('passport');
const jwt           = require('jsonwebtoken');
require('../passport-setup');





router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] })
  );

  router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    function(req, res) {
     const token = jwt.sign({ foo: 'buzzz' },'myprivatekey', function(err, token) {
        console.log(token,'glogin');
      });
      res.set('location','http://localhost:3000/home')
      res.status(301).json(token);
    });

router.get('/logout',(req,res)=>{
    req.session =null;
    req.logOut();
    res.redirect('/')
})

module.exports = router