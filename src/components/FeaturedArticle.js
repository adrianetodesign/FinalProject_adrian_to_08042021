import React from 'react';

class FeaturedArticle extends React.Component {

    render () {
        console.log(this.props.articles);
        return (
            <>
            <div>
                {[...this.props.articles].map(article => {
                    return <>
                        <div key={article.id + article.title}>
                            <h2>{article.title}</h2>
                            <h4>{article.author}</h4>
                            <span className="postedOn">{article.postedOn}</span>
                            <p>{article.text}</p>
                        </div>
                        </>
                        }
                    ).slice(this.props.articles.length-1)}
            </div>
            </>
        )
    }
}

export default FeaturedArticle;