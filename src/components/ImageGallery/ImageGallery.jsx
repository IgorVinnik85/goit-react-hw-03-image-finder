import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              arrTags={tags}
              arrLink={webformatURL}
              largeImg={largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};
