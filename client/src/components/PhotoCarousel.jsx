import React, { Component } from 'react';
import Photo from './Photo';
import Modal from './Modal';

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
          <Photo image={images[0]} handleClick={this.handleClick} />
        </div>
        <div className="column-photo">
          <Photo image={images[1]} />
          <Photo image={images[2]} />
        </div>
        <div className="row">
          <Photo image={images[3]} />
        </div>
        <div className="column-photo">
          <Photo image={images[4]} />
          <Photo image={images[5]} />
        </div>
        <div className="row">
          <Photo image={images[6]} />
        </div>
        <div className="column-photo">
          <Photo image={images[7]} />
          <Photo image={images[8]} />
        </div>
        <div className="row">
          <Photo image={images[9]} />
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
