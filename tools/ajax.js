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
    db.getAllUsers(req,res,function(all_users){
      var isNew = false;
      for (var i = 0; i < all_users.length; i++) {
        if (req.body.id != all_users[i].id) {
          isNew = true;
        }
      }
      if (isNew) {
        db.createNewUser(req, res, function(result){
          res.end('user ' + result);
        })
      }
    })

  },
  getAllListsWithUserData: function(req, res){
    db.getAllLists(req,res,function(all_lists){
      db.getAllUsers(req,res,function(all_users){
        var result = [];
        for (var i=0; i < all_lists.length; i++) {
          var newList = {};
          newList._id = all_lists[i]._id;
          newList.title = all_lists[i].title;
          newList.date = all_lists[i].date;
          newList.items = all_lists[i].items;
          newList.description = all_lists[i].description;
          newList.author = all_lists[i].author;
          var newUserData = {};
          for (var j=0; j < all_users.length; j++) {
            if (newList.author === all_users[j].id) {
              console.log(newList.author);
              newUserData = all_users[j];
            }
          }
          newList.userData = {
                "name" : newUserData.name,
                "url" : newUserData.url
           };
          result.push(newList);
        }
        console.log(result);
        res.end( JSON.stringify(result) );
      })
    })
  }
}

module.exports = ajax;
