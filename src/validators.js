const {check} = require("express-validator");
const {query} = require("express-validator");
const validator = require("validator");

exports.articlesValidators = [
    //title validator
    check('title')
    .escape()
    .trim()
    .isLength({min:1, max:50}).withMessage("Article title must be between 1 and 50 characters!"),

    //text validator
    check('text')
    .escape()
    .trim(),

    check('postedOn')
    .escape()
    .trim(),
];