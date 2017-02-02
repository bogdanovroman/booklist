const db = require('./db');
var ajax = {
  getAllLists: function(req, res){
    db.getAllLists(req,res,function(all_lists){
      res.end( JSON.stringify(all_lists) );
    })
  },
  getAllUsers: function(req, res){
    db.getAllUsers(req,res,function(all_users){
      res.end( JSON.stringify(all_users) );
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
  },
  getAllListsWithUserData: function(req, res){
    db.getAllLists(req,res,function(all_lists){
      db.getAllUsers(req,res,function(all_users){
//         res.end( JSON.stringify(all_users) );
        console.log(JSON.stringify(all_lists), JSON.stringify(all_users));
      })
    })
  }
}

module.exports = ajax;
