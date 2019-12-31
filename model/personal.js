const mongoose =  require('mongoose');

const personalSchema = new mongoose.Schema({

    name:{ type: String, required:true},
    photoUrl:{type: String},
    role:{type: String},
    git:{type:String},
    linkdin:{type:String},
    gmail:{type:String, required:true},
    about:{type:String},
    phone:{type:Number, maxlength:10},
    tagline:{type:String},
    resumeLink:{type:String}

    
});

module.exports = mongoose.model('Personal',personalSchema);