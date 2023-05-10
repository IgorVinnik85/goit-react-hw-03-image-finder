import React from "react";
import css from './Button.module.css'

export const Button = ({addImages}) => {
    return (
      <button type="button" className={css.button} onClick={() => addImages()}>
        Load more
      </button>
    );
}