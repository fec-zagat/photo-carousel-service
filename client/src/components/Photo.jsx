/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
  const { foodPhoto, handleClick } = props;
  // const styles = {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '50% 60%',
  // };
  // return <div className="photo" style={styles} onClick={handleClick} />;
  return (
    <div role="img" onClick={handleClick}>
      <img src={foodPhoto} className="photo" alt="restaurant photo" />
    </div>
  );
};

Photo.propTypes = {
  foodPhoto: PropTypes.string.isRequired,
};

export default Photo;
