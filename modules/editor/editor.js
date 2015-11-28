/*
  This module is used for handling Editor related actions
*/

// Node modules
var express = require('express'),
    async = require("async"),
    router = express.Router(),
    Api = require("../../api"),
    r = require("../../lib/request");
// ===


//GET Req
router.get(['/', '/:action'], function(req, res, next) {
  var action = req.params.action;
  console.log(req.ip);
  switch(action) {

    default:
      res.status(200).render("editor/editor.jade", {
        pageTitle: "pyCloud! - Editor",
        showRegister: false
      });
  }
  return next();
});
// ===

//POST Req
router.post(['/', '/:action'], function(req, res, next) {
  var action = req.params.action;

  switch(action){
  	case "run":
  		
  		res.status(200).json({"status":"Executed"});
  		break;
  }
  return next();
});
// ====

module.exports = router;