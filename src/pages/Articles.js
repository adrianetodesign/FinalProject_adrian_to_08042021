import React from 'react';
import ArticlesView from '../components/ArticlesView';
import { Link, NavLink } from 'react-router-dom';

class Articles extends React.Component {

    render () {
        return (
            <>
            <div>
                <h1>All of the Latest News across Khorvaire!</h1>
                <div className='articletext'>
                        <ArticlesView articles={this.props.articles} characters={this.props.characters}/>
                </div>
            </div>
            </>
        )
    }
}

export default Articles;