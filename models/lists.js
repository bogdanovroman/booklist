var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    title: {
        type: String
    },
    author: {
//         type: Object,
//         default : {
//           name : '',
//           id : '',
//           url : ''
//         }
      type: String
    },
    description: {
        type: String,
        default: 'Описания не будет :D'
    },
    items: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var List = mongoose.model('List', listSchema);

module.exports = mongoose.model('List', listSchema);

// List.remove({ name: 'qwe' }, function (err) {
//   if (err) return handleError(err);
//   console.log('removed');
// });
// var qqq = new List({
//           name: '123',
//           items: [
//             {
//               author: 'wqewqe',
//               title: 'sadasd'
//             },
//             {
//               author: 'wqew123qe',
//               title: '11111'
//             }
//           ]
//              }).save(function(err) {
//             if (err)
//                 return handleError(err);
//             }
//         )
