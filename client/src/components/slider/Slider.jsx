/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Modal from './Modal';

export default class Slider extends Component {
  constructor(props) {
    super(props);

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
      index: 0,
      showModal: false,
    };
    this.Next = this.Next.bind(this);
    this.Previous = this.Previous.bind(this);
  }

  handleClick = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClickClose = () => {
    this.setState({
      showModal: false,
    });
  };

  Next() {
    const { images, index } = this.state;
    if (index === images.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  }

  Previous() {
    const { images, index } = this.state;
    if (index === 0) {
      this.setState({
        index: images.length - 1,
      });
    } else {
      this.setState({
        index: index - 1,
      });
    }
  }

  render() {
    const { images, index, showModal } = this.state;
    const { onClose } = this.props;
    return (
      <React.Fragment>
        <div className="restaurant-name" style={{ color: 'white' }}>
          <div>Anchor Oyster Bar</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div className="number-of-slide">
              {`${index + 1} of ${images.length}`}
            </div>
            <div className="grid-view" onClick={this.handleClick} />
            {showModal ? <Modal onClose={this.handleClickClose} /> : null}
            <div className="x-button" onClick={onClose} />
          </div>
        </div>
        <div className="slider">
          <Slide
            images={images[index]}
            next={this.Next}
            previous={this.Previous}
          />
        </div>
      </React.Fragment>
    );
  }
}

Slider.propTypes = {
  onClose: PropTypes.func.isRequired,
};
