var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var itemSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});


var commentSchema=new Schema({
    
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

},{timestamps:true});

var itemSchema1=new Schema({
    identification:{
        type:Number,
        required:true
    },
name:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
label:{
    type:String,
    
},
price:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
comments:[commentSchema]
});
var Items=mongoose.model('item', itemSchema1);

module.exports=Items;