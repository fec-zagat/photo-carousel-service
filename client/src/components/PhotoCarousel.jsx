import React, { Component } from 'react';
import Photo from './Photo';
import Modal from './Modal';
import '../../dist/style.css';

export default class PhotoCarousel extends Component {
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

  render() {
    const { images, showModal } = this.state;
    return (
      <div className="photos-container">
        {showModal ? <Modal onClose={this.handleClickClose} /> : null}
        <div className="row">
          <Photo foodPhoto={images[0]} handleClick={this.handleClick} />
        </div>
        <div className="column-photo">
          <Photo foodPhoto={images[1]} />
          <Photo foodPhoto={images[2]} />
        </div>
        <div className="row">
          <Photo foodPhoto={images[3]} />
        </div>
        <div className="column-photo">
          <Photo foodPhoto={images[4]} />
          <Photo foodPhoto={images[5]} />
        </div>
        <div className="row">
          <Photo foodPhoto={images[6]} />
        </div>
        <div className="column-photo">
          <Photo foodPhoto={images[7]} />
          <Photo foodPhoto={images[8]} />
        </div>
        <div className="row">
          <Photo foodPhoto={images[9]} />
        </div>
      </div>
    );
  }

  // render() {
  //   const { images } = this.state;
  //   return (
  //     <div className="photos-container">
  //       {images.map((image, i) => (
  //         <Photo key={i} image={image} />
  //       ))}
  //     </div>
  //   );
  // }
}
