const mongoose =  require('mongoose');

const projectSchema = new mongoose.Schema({

    name:{ type: String, required:true},
    imageUrl:{type: String, default:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwif2Oey2d3mAhXpzDgGHVH8A9cQjRx6BAgBEAQ&url=https%3A%2F%2Ftutorialzine.com%2F2010%2F08%2Fanimated-404-not-found-page-css-jquery&psig=AOvVaw1T3S_xA0PR2iYwvjC1HtWY&ust=1577806463137137'},
    gitlink: {type: String, default:'https://github.com/hiashutoshsingh'},
    livelink:{type: String},
    desc:{type: String}
});

module.exports = mongoose.model('Project',projectSchema);