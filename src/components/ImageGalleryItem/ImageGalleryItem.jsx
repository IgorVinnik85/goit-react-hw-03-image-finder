import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalImage: null,
  };

  openModal = event => {
    console.log(event.currentTarget.alt);
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
    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            onClick={this.openModal}
            src={this.props.arrLink}
            alt={this.props.arrTags}
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

// arrTags, arrLink, clickOnEl;
