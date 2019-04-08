import React, { Component } from 'react';
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
        <div
          className="restaurant-name"
          style={{ color: 'white', textAlign: 'center' }}
        >
          Anchor Oyster Bar
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              float: 'right',
            }}
          >
            <span className="number-of-slide">
              {index + 1}
{' '}
of
{' '}
{images.length - 1}
            </span>
            <a className="grid-view" onClick={this.handleClick} />
            {showModal ? <Modal onClose={this.handleClickClose} /> : null}
            <a className="x-button" onClick={onClose} />
          </div>
        </div>
        <div className="slider">
          <div
            className="arrows"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 2,
            }}
          >
            <a className="previous" onClick={() => this.Previous()} />
            <a className="next" onClick={() => this.Next()} />
          </div>
          <Slide images={images[index]} />
        </div>
      </React.Fragment>
    );
  }
}

/*
 <button type="button" onClick={() => this.Previous()}>
          Previous
        </button>
        <button type="button" onClick={() => this.Next()}>
          Next
        </button>
*/
