const router         = require('express').Router();
const postController = require('../controllers/postController')

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.status(401).json('Not Authorised')
    }
})
router.post('/create',postController.createPost)
router.put("/like/:id",postController.likePost)
router.put("/dislike/:id",postController.dislikePost)
router.put("/flagPost/",postController.flagPost)
router.get("/flaggedPosts",postController.getFlaggedPosts)
router.get('/getPost/:id',postController.getPost)
router.get('/allPosts/:id',postController.getAllPosts)
router.put('/comment/:id',postController.addComment)
module.exports =  router 