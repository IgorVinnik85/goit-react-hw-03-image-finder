import React, { Component } from 'react';
import { Searchabar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

const KEY = '34813361-3927ac478a2bf3f204ffaaf5a';

export class App extends Component {
  state = {
    imageName: '',
    arrayImages: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(res => this.setState({ arrayImages: res.hits }));
    }
  }

  getSerchName = imageName => {
    this.setState({ imageName });
  };

  btnAddImages = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(res =>
        this.setState(prevState => {
          return {
            page: prevState.page + 1,
            arrayImages: [...prevState.arrayImages, ...res.hits],
          };
        })
      );
  };

  render() {
    return (
      <>
        <Searchabar onSubmit={this.getSerchName} />
        <ImageGallery images={this.state.arrayImages} />
        {this.state.imageName && <Button addImages={this.btnAddImages} />}
      </>
    );
  }
}
