import React from 'react';

const Slide = (props) => {
  const { images } = props;
  const styles = {
    height: '500px',
    width: '500px',
    backgroundImage: `url(${images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="slide" style={styles} />;
};
export default Slide;
