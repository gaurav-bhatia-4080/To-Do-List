const mongoose=require('mongoose');

// Designing Schema for Database
const listSchema=new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
  // },
  // flag:{
  //   type:Boolean,
  //   required:true
  // }
})

// Exporting Schema
const Item=mongoose.model('Item', listSchema);

module.exports=Item;