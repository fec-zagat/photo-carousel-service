/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { onClose } = this.props;
    return (
      <React.Fragment>
        <div className="restaurant-name">Anchor Oyster Bar</div>
        <div className="x-button" onClick={onClose} />
        <div className="container" style={styles}>
          {images.map(image => (
            <Pictures key={image.id} image={image} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
PhotoGrid.propTypes = {
  onClose: PropTypes.func.isRequired,
};
