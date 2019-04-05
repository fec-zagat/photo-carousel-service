import React from 'react';

const Pictures = (props) => {
  const { image } = props;
  const styles = {
    height: '469px',
    width: '464px',
    background: '#ADD8E6',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="grid-pictures" style={styles} />;
};

export default Pictures;
