import React, { Component } from 'react';
import '../../dist/style.css';

const imgStyle = {
  height: '395px',
  width: '395px',
  maxWidth: '100%',
  maxHeight: '395px',
  margin: '3px',
};

const imgColStyle = {
  height: '195px',
  width: '195px',
  maxWidth: '100%',
  maxHeight: '195px',
  margin: '3px',
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export default class PhotoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaData: [],
      // showModal: false,
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    const id = path.split('-')[2].split('/')[0];
    const endpoint = `/api/restaurant/${id}`;
    // const endpoint = `api/restaurant/${id}`;
    fetch(endpoint)
      .then(response => response.json())
      .then((results) => {
        this.setState({
          mediaData: results.photos,
        });
      })
      .catch(error => console.error(error));
  }

  // handleClick = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };

  // handleClickClose = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // };

  render() {
    const { mediaData } = this.state;
    const media = mediaData.slice(0, 10).map((image, index) => {
      if (index % 3 === 0) {
        return (
          <div className="media" style={{ minWidth: '0', margin: '2px' }}>
            <img src={image} alt="" style={imgStyle} />
          </div>
        );
      }
      if (index % 3 === 1) {
        return (
          <div
            id="smallMedia"
            className="media-column-container"
            style={{ minWidth: '0', margin: '2px' }}
          >
            <img src={image} alt="" style={imgColStyle} />
            <img src={mediaData[index + 1]} alt="" style={imgColStyle} />
          </div>
        );
      }
    });

    return (
      <section className="media-container" style={sectionStyle}>
        {media}
      </section>
    );
  }
}
