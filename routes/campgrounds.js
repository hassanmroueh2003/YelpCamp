const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer  = require('multer');
const upload = multer( { dest: 'uploads/' } );




// Use router.route to chain methods for the same path
router.route('/')
    // Display all campgrounds
    .get(catchAsync(campgrounds.index))
    // Create a new campground
    .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
    
// Show form to create a new campground
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

// Group all routes for a specific campground by ID
router.route('/:id')
    // Show a specific campground
    .get(catchAsync(campgrounds.showCampground))
    // Update a campground
    .put(isLoggedIn, validateCampground, isAuthor, catchAsync(campgrounds.updateCampground))
    // Delete a campground
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

// Show form to edit a campground
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

module.exports = router;
