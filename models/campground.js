const mongoose = require('mongoose');
const review = require('./review');

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: Number,
    images: [String], 
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews :[
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})
module.exports = mongoose.model('Campground', CampgroundSchema);