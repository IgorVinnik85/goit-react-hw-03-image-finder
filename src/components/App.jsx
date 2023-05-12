import React, { Component } from 'react';
import { Searchabar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Oval } from 'react-loader-spinner';

const API_KEY = '34813361-3927ac478a2bf3f204ffaaf5a';

export class App extends Component {
  state = {
    imageName: '',
    arrayImages: [],
    page: 1,
    error: null,
    loader: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.imageName !== this.state.imageName || prevState.page) !==
      this.state.page
    ) {
      this.setState({
        loader: true,
      });

      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
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
        .catch(er => this.setState({ er }))
        .finally(() =>
          this.setState({
            loader: false,
          })
        );
    }
  }
  getSerchName = imageName => {
    this.setState({
      arrayImages: [],
      page: 1,
      imageName,
    });
  };

  btnAddImages = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { arrayImages, imageName } = this.state;
    return (
      <>
        <Searchabar onSubmit={this.getSerchName} />
        <ImageGallery images={arrayImages} click={this.openModal} />
        {this.state.loader && (
          <Oval
            height={200}
            width={5000}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
        {imageName && <Button addImages={this.btnAddImages} />}
      </>
    );
  }
}
