import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PhotoGrid from '../photogrid/PhotoGrid';

const styles = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
};

export default class Modal extends Component {
  render() {
    const { onClose } = this.props;
    return ReactDOM.createPortal(
      <div style={styles}>
        <div>
          <PhotoGrid onClose={onClose} />
        </div>
      </div>,
      document.getElementById('modal'),
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
