import React, { Component } from 'react';
import CharactersView from '../components/CharactersView';

class Characters extends React.Component {
    render () {
        return (
            <>
            <div>
                <h1>Our Writers</h1>
                <div className='articletext'>
                    <CharactersView characters={this.props.characters}/>
                </div>
            </div>
            </>
        )
    }
}

export default Characters;