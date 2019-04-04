import React, { Component } from 'react';
import Photo from './Photo';

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
        'https://images.unsplash.com/photo-1548678967-f1aec58f6fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
        'https://images.unsplash.com/photo-1548625149-720134d51a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      ],
    };
  }

  handleClick() {
    alert('hello!');
  }

  render() {
    const { images } = this.state;
    return (
      <div className="photos-container">
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
