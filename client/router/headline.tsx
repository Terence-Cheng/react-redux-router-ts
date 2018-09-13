import React from 'react';

export default class News extends React.Component<any> {
  render() {
    const { title, author, description, url, urlToImage, publishedAt } = this.props;
    return(
      <div>
        <h3><a href={url}>{title}</a></h3>
        <p>From: {author}</p>
        <div>
          <img src={urlToImage} style={{ width: '100px'}} />
          <p>{description}</p>
        </div>
        <b>{publishedAt}</b>
        <hr/>
      </div>
    );
  }
}
