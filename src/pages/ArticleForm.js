import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';

class ArticlesForm extends React.Component {
    constructor(props) {
        super(props);
        this.populateDropDown = this.populateDropDown.bind(this);
        this.populateCharacters = this.populateCharacters.bind(this);
        this.title = React.createRef();
        this.day = React.createRef();
        this.month = React.createRef();
        this.year = React.createRef();
        this.charmenu = React.createRef();
        this.content = React.createRef();
        this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    }

    populateDropDown(dayfield, monthfield, yearfield) {
        let day = document.getElementById(dayfield);
        let month = document.getElementById(monthfield);
        let year = document.getElementById(yearfield);

        for (let i = 0; i < 28; i++) {
            day.options[i] = new Option(i+1, i+1);
        }
        day.options[0].selected=true;

        for (let m = 0 ; m < 12; m++) {
            month.options[m] = new Option(this.props.monthsEberron[m], this.props.monthsEberron[m]);
        }
        month.options[0].selected=true;

        for (let y = 0; y < 25; y++) {
            year.options[y] = new Option(y+998, y+998);
        }
        year.options[0].selected=true;
    }

    populateCharacters(charmenu) {
        let menu = document.getElementById(charmenu);
        let characters = this.props.characters;

        for (let i=0; i < this.props.characters.length; i++) {
            menu.options[i] = new Option(characters[i].name, characters[i].name)
        }
        menu.options[0].selected=true;
    }

    handleArticleSubmit(event) {
        let charactersArray = this.props.characters;
        let articlesArray = this.props.articles;
        let articleId = articlesArray.length;

        event.preventDefault();
        let postArticle = {
            id: articleId +1,
            title: this.title.current.value,
            author: this.charmenu.current.value,
            postedOn: this.day.current.value + ' ' + this.month.current.value + ', ' + this.year.current.value,
            articleImage: "",
            text: this.content.current.value};

        charactersArray.find(arrayItem => arrayItem.name == this.charmenu.current.value).articles.push(postArticle._id);
        articlesArray.push(postArticle);
        axios.post('/new', postArticle);
        this.props.history.push('/');
    }

    componentDidMount() {
        this.populateDropDown(this.day.current.id,this.month.current.id,this.year.current.id);
        this.populateCharacters(this.charmenu.current.id);
    }

    render () {

        return (
            <>
            <h1>Submit a New Article!</h1>
            <form onSubmit={this.handleArticleSubmit}>
            <div className="articletext">
                <div>
                    <label htmlFor='title'>Title</label><br />
                    <input required={true} type='text' name="title" id="title" ref={this.title}></input>
                </div>
                <div>
                    <label htmlFor='charmenu'>Written By</label> <br />
                    <select name="charmenu" id="charmenu" ref={this.charmenu}></select>
                </div>
                <div>
                    <label htmlFor ='postedOn'>Posted On</label> <br />
                    <div name="postedOn">
                        <select name="day" id="day" ref={this.day}></select>
                        <select name="month" id="month" ref={this.month}></select>
                        <select name="year" id="year" ref={this.year}></select>
                    </div>
                </div>
                <div>
                    <label htmlFor='content'>Article Body</label> <br />
                    <textarea name="content" id="content" rows='20' cols='75' ref={this.content}></textarea>
                </div>
            </div>
            <div className="articletext">
                <button type="submit">Submit</button>
            </div>
            </form>
            </>
        )
    }
}

export default ArticlesForm;