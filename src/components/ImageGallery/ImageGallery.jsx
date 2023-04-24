import { Component } from 'react'
import PropTypes from "prop-types";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ImageGallery.module.css'
import {SearchImages} from 'components/Apis'
import {ImageGalleryItem} from 'components/ImageGalleryItem'

export class ImageGallery extends Component{
    static propTypes = {
        value: PropTypes.string.isRequired,
    }
    state = {
        images: null
    }

    async componentDidUpdate(nextProps){
        console.log(this.props.value);
        if(this.props.value !== nextProps.value){
            try {
                const data = await SearchImages.searchAxios(this.props.value);
                if(!data.totalHits){
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            }else if(data.totalHits < SearchImages.page * SearchImages.per_page){
                Notify.failure('We\'re sorry, but you\'ve reached the end of search results.');
            }
            else{
                console.log(data.hits);
                this.setState({images: data.hits})
            }
            } catch(error) {
                console.log(error.message);
            } 
        }
    }

    render(){
        const {images} = this.state;
        return(
            <ul className={css.ImageGallery}>
                {images && images.map(
                    ({id, webformatURL, tags}) => 
                    <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags}/>)
                }
            </ul>
        )   
    }
}

// try {
//     const data = await SearchImages.searchAxios();
//     if(!data.totalHits){
//         Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//     }else if(data.totalHits < SearchImages.page * SearchImages.per_page){
//       Notify.failure('We\'re sorry, but you\'ve reached the end of search results.');
//     }
//     else{
//       renderMarkup(getMarkup(data.hits));
//       simplelightbox.refresh();
//       const lastPhotoCard = document.querySelector('.photo-card:last-child');
//       observer.observe(lastPhotoCard);
//     }
//   } catch(error) {
//     console.log(error.message);
//   }