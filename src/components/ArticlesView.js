import React from 'react';

class ArticlesView extends React.Component {

    constructor(props) {
        super(props);
        this.articlesRenderRef = React.createRef();
        this.state = {
            articlesAuthor: this.props.articles.slice(),
        }
        this.changeAuthor = this.changeAuthor.bind(this);
    }

    changeAuthor(event) {
        event.preventDefault();
        if (event.target.value == "All") {
            this.setState({articlesAuthor: this.props.articles.slice()})
        }
        else {
            this.setState({articlesAuthor: this.props.articles.filter(article=> article.author.indexOf(event.target.value) !== -1).slice()})
        }
    }

    render () {
        console.log(this.state.articlesAuthor);
        return (
            <>
            <div>
                <label htmlFor='selectAuthor'>Search by Author</label> <br />
                <select name='selectAuthor' onChange={this.changeAuthor}>
                    <option value="All" key={'All'}>All</option>
                    {this.props.characters.map(character => {
                        return <>
                        <option value={character.name} key={character.name}>{character.name}</option>
                        </>
                    }
                    )}
                </select>
            </div>
            <div>
                {[...this.state.articlesAuthor].reverse().map(article => {
                    return <>
                        <div key={article.id + article.title}>
                            <h2>{article.title}</h2>
                            <h4>{article.author}</h4>
                            <span className="postedOn">{article.postedOn}</span>
                            <p>{article.text}</p>
                        </div>
                        </>
                        }
                    )}
            </div>
            </>
        )
    }
}

export default ArticlesView;