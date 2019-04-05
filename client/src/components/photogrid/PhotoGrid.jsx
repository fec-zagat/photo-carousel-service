import React, { Component } from 'react';
import Pictures from './Pictures';

const styles = {
  height: '1281px',
  width: '1425px',
  display: 'flex',
  // background: '#2a5699',
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
      <div className="restaurant-name">ANCHOR OYSTER BAR</div>
      <div className="container" style={styles}>
        {images.map((image, i) => (
          <Pictures key={i} image={image} />
        ))}
      </div>
    );
  }
}
