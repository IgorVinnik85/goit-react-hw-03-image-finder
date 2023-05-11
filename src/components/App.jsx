import React, { Component } from 'react';
import { Searchabar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from './Modal/Modal';

const KEY = '34813361-3927ac478a2bf3f204ffaaf5a';

export class App extends Component {
  state = {
    imageName: '',
    arrayImages: [],
    page: 1,
    error: null,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error('Nothing was found'));
        })
        .then(res => {
          this.setState({
            arrayImages: res.hits,
          });
        })
        .catch(er => this.setState({ er }));
    }
    if (prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error('Nothing was found'));
        })
        .then(res => {
          this.setState(prevState => {
            return {
              arrayImages: [...prevState.arrayImages, ...res.hits],
            };
          });
        })
        .catch(er => this.setState({ er }));
    }
  }
  getSerchName = imageName => {
    this.setState({
      imageName,
      page: 1,
    });
  };

  btnAddImages = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  openModal = event => {
    // console.log(event.currentTarget)
    this.setState({ modalImage: event.currentTarget.src });
  };

  onModalClose = event => {
    if (event.target === event.currentTarget) {
      this.setState({ modalImage: null });
    }
  };

  render() {
    return (
      <>
        <Searchabar onSubmit={this.getSerchName} />
        <ImageGallery images={this.state.arrayImages} click={this.openModal} />
        {this.state.imageName && <Button addImages={this.btnAddImages} />}
        {this.state.modalImage && (
          <Modal url={this.state.modalImage} modalClose={this.onModalClose} />
        )}
      </>
    );
  }
}
