import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      this.props.closeEsc();
    }
  };

  render() {
    const { modalClose, alt, url } = this.props;
    return (
      <div className={css.overlay} onClick={modalClose}>
        <div className={css.modal}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  closeEsc: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};