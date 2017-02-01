const db = require('./db');
var ajax = {
  getAllLists: function(req, res){
    db.getAllLists(req,res,function(all_lists){
      res.end( JSON.stringify(all_lists) );
    })
  },
  postNewList: function(req, res){
    db.createNewList(req, res, function(result){
      res.end('list ' + result);
    })
  },
  postNewUser: function(req, res){
    db.createNewUser(req, res, function(result){
      res.end('user ' + result);
    })
  }
}

module.exports = ajax;
