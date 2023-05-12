import React from "react";
import css from './Button.module.css'
import PropTypes from 'prop-types';

export const Button = ({addImages}) => {
    return (
      <button type="button" className={css.button} onClick={() => addImages()}>
        Load more
      </button>
    );
}

Button.propTypes = {
  addImages: PropTypes.func.isRequired,
};