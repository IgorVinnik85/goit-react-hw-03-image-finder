import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              tag={tags}
              link={webformatURL}
              largeImg={largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};
