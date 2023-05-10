import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';

const KEY = '34813361-3927ac478a2bf3f204ffaaf5a';

export class ImageGallery extends Component {
  state = {
    arrayImages: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.images}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(res => {
          this.setState({ arrayImages: res.hits });
        });
    }
    if (prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.images}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(res => {
          this.setState(prevState => {
            return {
              arrayImages: [...prevState.arrayImages, ...res.hits],
            };
          });
        });
    }
  }

  btnAddImages = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <>
        <ul className={css.imageGallery}>
          <ImageGalleryItem arrayImages={this.state.arrayImages} />
        </ul>
        {this.props.images && <Button addImages={this.btnAddImages} />}
      </>
    );
  }
}
