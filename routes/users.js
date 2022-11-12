var express = require('express');
var router = express.Router();
var U = require('../model/usersSchema.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

   U.find(function(err,data){
     if(err) throw err;
    //  res.json(data);
    res.render("users-list.twig", {data});
   });

});

/*Delate user by ID*/
router.get('/delete/:id', function(req,res){
  var idu = req.params.id;
  // console.log.id;
  U.findOneAndRemove ({_id : idu}, function(err){
    res.redirect('/users/')

  })
});

router.get('/template', function(req, res, next) {
   res.render("base.twig");
  });

  /*show from user */
router.get('/showform', function(req, res){
  res.render("userAdd.twig");

  });

   /*ajouter dans bd */
router.post('/adduser', function(req,res){
  //console.log(req.body.nom)
  user= new U (req.body);
    user.save(()=>{
    res.redirect('/users/')
    })
    // res.end;

  });




module.exports = router;
