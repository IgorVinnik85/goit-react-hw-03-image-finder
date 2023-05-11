import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, click }) => {
  // console.log(click);
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              arrTags={tags}
              arrLink={webformatURL}
              clickOnEl={click}
            />
          );
        })}
      </ul>
    </>
  );
};
