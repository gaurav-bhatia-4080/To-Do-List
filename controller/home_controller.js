const Item = require("../models/newitem");

console.log("Controller is Working")


// Controller for Home...Display
module.exports.home= function (req, res) {
  Item.find({}, function (err, toDoList) {


    if (err) { console.log('List Cannot be Printed'); 
    return;     
  }

    return res.render('home', {
      list: toDoList,
    });
  }
  )
}

// Controller for Creating Task
module.exports.createList = function (req, res) {
  Item.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    flag: true
  }, function (err, newContact) {

    if (err) {
      console.log('List cannot be Created');
      return;
    }

    return res.redirect('back');
  }
  )
  // return res.end("<h1>Hello There</h1>")
}

// Controller for Deleting Task
module.exports.DeleteList = function (req, res) {
  for(let i in req.body){
    
     Item.findByIdAndDelete(req.body[i], function (err) {
      if (err) {
        console.log('Error in Deleting the item'); 
        return;
      }

    })
  }
  return res.redirect('back');
}