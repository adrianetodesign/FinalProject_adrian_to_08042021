const { ScopeManager } = require('eslint-scope');
const mongoose = require('mongoose');
const {CharacterSheetSchema} = require('./CharacterSheet');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    id:{type:Number, required:true},
    title:{type:String, required:true},
    author:{type:String, required:true},
    postedOn:{type:String, required:true},
    articleImage:{type:String},
    text:{type:String}

});

const  Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; 