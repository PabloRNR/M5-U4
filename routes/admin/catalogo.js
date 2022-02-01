var express = require('express');
var router = express.Router();
var pool = require('./../../models/bd');

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('select * from catalogo').then(function (resultados){
      console.log(resultados)
    });
  res.render('admin/catalogo',{
      layout:'admin/layout',
      usuario: req.session.nombre
  });
});


// select
// pool.query('select * from catalogo').then(function (resultados){
//   console.log(resultados)
// });

module.exports = router;