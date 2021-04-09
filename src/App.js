import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Articles from './pages/Articles';
import ArticleForm from './pages/ArticleForm';
import Characters from './pages/Characters';
import Header from './components/Header';

const axios = require('axios').default;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            characters: [],
            monthsEberron: ['Zarantyr', 'Olarune', 'Therendor', 'Eyre', 'Dravago', 'Nymm', 'Lharvion', 'Barrakas', 'Rhaan', 'Sypheros', 'Aryth', 'Vult']
        }
    }
    /*
    Getting the data from MongoDB using Axios.
    */
    componentDidMount() {
        axios.get('/articles').then(({ data })=> 
        this.setState({articles: data}))
        .catch(error => console.log(error));
        
        axios.get('/characters').then(({ data })=>
        this.setState({characters: data}))
        .catch(error => console.log(error));
    }
    
    render() {
        console.log(this.state.articles);
        console.log(this.state.characters);
        return <>
        <Router>
        <div className="app">
            <div className="head">
                <Header />
                <Navbar />
            </div>
            <div className="wrapper">
                {/*
                When using react-router, you can send props by using render=(props)....etc.
                */}
                <Switch>
                    <Route path='/' exact render={(props)=> (<Home articles={this.state.articles} characters={this.state.characters} {...props} isAuthed={true}/>)}/>
                    <Route path='/passage_articles' render={(props)=> (<Articles articles={this.state.articles}characters={this.state.characters}{...props} isAuthed={true}/>)}/>
                    <Route path='/writers'render={(props)=> (<Characters characters={this.state.characters}{...props} isAuthed={true}/>)}/>
                    <Route path ='/new_article' render={(props)=> (<ArticleForm articles={this.state.articles} 
                                                                                characters={this.state.characters} 
                                                                                monthsEberron={this.state.monthsEberron}{...props} isAuthed={true}/>)} />
                </Switch>
            </div>
            <footer>
                Passage Chronicle is unofficial Fan Content permitted under the Fan Content Policy. 
                Not approved/endorsed by Wizards. Portions of the materials used are property of 
                Wizards of the Coast. © Wizards of the Coast LLC.
            </footer>
        </div>
        </Router>
        </>
    }
}

export default App;