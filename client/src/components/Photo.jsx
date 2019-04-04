import React from 'react';

const Photo = (props) => {
  const { image, handleClick } = props;
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="photo" style={styles} onClick={handleClick} />;
};

export default Photo;
