import React, { Component } from 'react';
import css from './Searchbar.module.css'


export class Searchabar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.target.value });
  };

  handleSubmit = evt => {
      evt.preventDefault();
      if (this.state.searchName === '') {
          alert('Enter something!')
          return
      }
      this.props.onSubmit(this.state.searchName)
      this.setState({searchName: ''})
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}