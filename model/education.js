const mongoose =  require('mongoose');

const educationSchema = new mongoose.Schema({
    
    collegename:{type:String, required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    desc:{type:String}
    
});

module.exports = mongoose.model('Education',educationSchema);