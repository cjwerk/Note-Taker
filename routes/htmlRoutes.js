const router = require("express").Router();
const path = require("path");


router.get("/notes", function(req, res){
   res.sendFile(path.join(__dirname,"../public/notes.html"))
})
router.post("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))

})

module.exports = router;