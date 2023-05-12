import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    modalImage: null,
  };

  openModal = event => {
    // console.log(event.currentTarget.alt);
    this.setState({
      modalImage: this.props.largeImg,
      modalAlt: event.currentTarget.alt,
    });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  closeModalClick = event => {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  };
  render() {
    const { link, tag } = this.props;
    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            onClick={this.openModal}
            src={link}
            alt={tag}
            width="400"
            className={css.imageGalleryItem_image}
          />
        </li>
        {this.state.modalImage && (
          <Modal
            url={this.state.modalImage}
            alt={this.state.modalAlt}
            modalClose={this.closeModalClick}
            closeEsc={this.closeModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
