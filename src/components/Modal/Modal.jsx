import React from "react";
import css from './Modal.module.css'

export const Modal = ({ url, modalClose }) => {
  return (
    <div className={css.overlay} onClick={modalClose}>
      <div className={css.modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};