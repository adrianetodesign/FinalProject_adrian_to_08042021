import React, { Component } from 'react';
import ArticlesView from '../components/ArticlesView';
import FeaturedArticle from '../components/FeaturedArticle';

class Home extends React.Component {
    render () {
        return (
            <>
            <div>
                <h1>Breaking News!</h1>
                <div className='articletext'>
                    <FeaturedArticle articles={this.props.articles} characters={this.props.characters}/>
                </div>
            </div>
            </>
        )
    }
}

export default Home;