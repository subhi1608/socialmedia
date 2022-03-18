const router = require('express').Router();
const userController    = require('../controllers/userController')

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.status(401).json('Not Authorised')
    }
})
router.get('/',(req,res)=>{
    res.status(200).json('running')
})
router.get('/suggestions/:id',userController.suggestedFriends)
module.exports = router;