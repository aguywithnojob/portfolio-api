const mongoose =  require('mongoose');

const experienceSchema = new mongoose.Schema({
    
        company:{type: String, required:true},
        role:{type: String, required:true},
        desc:{type:String},
        from:{type:String},
        to:{type: String}
});

module.exports = mongoose.model('Experience',experienceSchema);