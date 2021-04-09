const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSheetSchema = new Schema({
    name:{type:String, required:true},
    profileImage:{type:String},
    backstory:{type:String},
    level:{type:Number},
    str:{type:Number},
    dex:{type:Number},
    con:{type:Number},
    int:{type:Number},
    wis:{type:Number},
    cha:{type:Number},
    articles:[{type:Schema.Types.ObjectId, ref:'Article'}]
});

const  CharacterSheet = mongoose.model("CharacterSheet", CharacterSheetSchema);

module.exports = CharacterSheet;
exports.CharacterSheetSchema = CharacterSheetSchema;