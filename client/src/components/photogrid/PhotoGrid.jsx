import React, { Component } from 'react';
import Pictures from './Pictures';

const styles = {
  height: '1281px',
  width: '1425px',
  display: 'flex',
  margin: '40px auto',
};

export default class PhotoGrid extends Component {
  constructor() {
    super();

    this.state = {
      images: [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
      ],
    };
  }

  render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <div className="restaurant-name">Anchor Oyster Bar</div>
        <a className="x-button" onClick={this.props.onClose} />
        <div className="container" style={styles}>
          {images.map((image, i) => (
            <Pictures key={i} image={image} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
