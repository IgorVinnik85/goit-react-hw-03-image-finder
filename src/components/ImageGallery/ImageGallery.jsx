import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css'


export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem arrayImages={images} />
    </ul>
  );
};
