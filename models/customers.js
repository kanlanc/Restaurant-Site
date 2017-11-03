var mongoose=require('mongoose');

var Schema=mongoose.Schema;


var orderSchema=new Schema({
    itemname:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true});


var customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    order:[orderSchema]
},{timestamps:true});


var Customer=mongoose.model('customer',customerSchema);

module.exports=Customer;