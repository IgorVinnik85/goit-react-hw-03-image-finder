import React from "react";
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ arrayImages}) => {
  console.log(arrayImages);
  return arrayImages.map(({ id, webformatURL, tags }) => {
    return (
      <li key={id} className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          width="400"
          className={css.imageGalleryItem_image}
        />
      </li>
    );
  });
}; 