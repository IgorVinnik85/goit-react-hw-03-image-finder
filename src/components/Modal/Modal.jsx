import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      this.props.closeEsc();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.props.modalClose}>
        <div className={css.modal}>
          <img src={this.props.url} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
