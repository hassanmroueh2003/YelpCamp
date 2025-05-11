const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

// Define the extension to sanitize HTML
const extension = (joi) => ({
  type: 'string',
  base: joi.string(),
  messages: {
    'string.sanitize': '{{#label}} contains disallowed HTML tags!',
  },
  rules: {
    sanitize: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [], // Specify allowed tags
          allowedAttributes: {}, // Specify allowed attributes
        });
        if (clean !== value) {
          return helpers.error('string.sanitize', { value });
        }
        return clean;
      },
    },
  },
});

// Extend Joi with the sanitize extension
const Joi = BaseJoi.extend(extension);

// Define the campground schema
module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required().sanitize(),
    price: Joi.number().required().min(0),
    description: Joi.string().required().sanitize(),
    location: Joi.string().required().sanitize(),
    images: Joi.array().items(Joi.string().uri()).optional(),
  }).required(),
});

// Define the review schema
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    body: Joi.string().required().sanitize(),
    rating: Joi.number().required().min(1).max(5),
  }).required(),
});
