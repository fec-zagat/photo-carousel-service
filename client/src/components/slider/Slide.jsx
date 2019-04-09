/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const { images, next, previous } = props;
  const styles = {
    height: '400px',
    width: '400px',
    backgroundImage: `url(${images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return (
    <div className="slide" style={styles}>
      <div className="previous" onClick={previous} />
      <div className="next" onClick={next} />
    </div>
  );
};

Slide.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  images: PropTypes.string.isRequired,
};

export default Slide;
