const { render } = require('ejs');
const express = require('express');
const app = express();

const connection = require('./db/connection');

//Models
const Article = require('./models/Article');
const CharacterSheet = require('./models/CharacterSheet');

const {articlesValidators} = require('./src/validators');
const {validationResult} = require("express-validator");
let articleid = 0;

app.use(express.static('public'));
app.use(express.json());

app.get('/articles', (req,res)=>{
    Article.find({})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        console.log(error).send("There was an error when trying to retrieve articles.");
    })
});

app.get('/characters', (req,res)=>{
    CharacterSheet.find({})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        console.log(error).send("There was an error when trying to retrieve characters.");
    })
})

app.get('/latest_article', (req,res)=>{
    Article.find().limit(1).sort({$natural:-1})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        console.log(error).send("There was an error when trying to retrieve the latest article.");
    })
})

app.get('/author', (req,res)=>{
    CharacterSheet.find().limit(1).sort({$natural:-1})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        console.log(error).send("There was an error when trying to retrieve the newest author.");
    })
})

app.get('/*', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/new', articlesValidators, (req,res)=>{
    const valError = validationResult(req).array();

    //Error handling.
    if(valError.length > 0) {
        let error = new Error();
        error.status = 422;
        error.data = [];
        for (i = 0; i < valError.length; i++) {
            error.data[i] = valError[i].msg;
        }
        res.status(error.status).send(error);
    }

    let postArticle = new Article(req.body);

    CharacterSheet.findOne({name: req.body.author})
    .exec((error,character)=> {
        if (error) {
            console.log(error).send("Error! Can't find character with that name.");
        }
        postArticle.save(
            character.update({$push: {'articles': postArticle._id}})
        )
    })
});

connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen(process.env.PORT, ()=>{
        console.log('listening on' + process.env.PORT);
    });
});