import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ arrTags, arrLink, clickOnEl }) => {
  // console.log(clickOnEl);
  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={clickOnEl}
        src={arrLink}
        alt={arrTags}
        width="400"
        className={css.imageGalleryItem_image}
      />
    </li>
  );
};
