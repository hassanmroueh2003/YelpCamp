// routes/reviews.js

const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const flash = require('connect-flash');
const reviews = require('../controllers/reviews');



// Review Routes
router.post('/', isLoggedIn ,validateReview, catchAsync( reviews.createReview ));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor,catchAsync( reviews.deleteReview));

module.exports = router;
