import { Component } from 'react'
import PropTypes from "prop-types";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ImageGallery.module.css'
import {ImageGalleryItem} from 'components/ImageGalleryItem'

export class ImageGallery extends Component{
    static propTypes = {
        value: PropTypes.string.isRequired,
        page: PropTypes.number.isRequired,
        onChangePending: PropTypes.func.isRequired,
        onChangeVisual: PropTypes.func.isRequired,
        openModal: PropTypes.func.isRequired,
    }
    state = {
        images: []
    }
    makeFatch = ({value, page}) => {
        const searchParams = new URLSearchParams({
            key : '34316730-360f829ab2b8fbc41f5ac52ed',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page,
            q: value,
          });
          const url = `https://pixabay.com/api/?${searchParams}`;
          fetch(url)
            .then(response => response.json())
            .then(response => this.setState((prevState)=>({images: [...(page !== 1 ? prevState.images: []), ...response.hits]})))
            .catch(error => Notify.failure(error.message))
            .finally(() => {
                this.props.onChangePending();
                this.props.onChangeVisual();
            })
    }
    componentDidUpdate(nextProps){
        const {value, page} = this.props;
        if(value !== nextProps.value || page !== nextProps.page){
            this.makeFatch(this.props);
        }
    }

    render(){
        const {images} = this.state;
        return(
            <ul className={css.ImageGallery}>
                {images.map(
                    ({id, webformatURL, tags, largeImageURL}) => 
                    <ImageGalleryItem
                    openModal={this.props.openModal}
                    key={id} 
                    webformatURL={webformatURL} 
                    tags={tags}
                    largeImageURL={largeImageURL}
                    />)
                }
            </ul>
        )   
    }
}