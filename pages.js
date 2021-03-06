var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('_layouts/index.ejs', {title:'Home'});
});


//Exports
module.exports = router;


