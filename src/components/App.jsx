import React, { Component } from 'react';
import { Searchabar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imageName: '',
  };

  getSerchName = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchabar onSubmit={this.getSerchName} />
        <ImageGallery images={this.state.imageName} />
      </>
    );
  }
}
