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
    btnVisible: true,
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
          console.log(res.hits);

          res.hits.length < 12
            ? this.setState({
                btnVisible: false,
              })
            : this.setState({
                btnVisible: true,
              });

          this.setState(prevState => {
            return {
              arrayImages: [...prevState.arrayImages, ...res.hits],
            };
          });
        })
        .catch(er => this.setState({ er }))
        .finally(() => {
          this.setState({
            loader: false,
          });

          if (this.state.arrayImages.length) {
            window.scrollBy(0, 255);
          }
        });
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
    const { arrayImages, imageName, btnVisible } = this.state;
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
        {imageName && btnVisible && <Button addImages={this.btnAddImages} />}
      </>
    );
  }
}
