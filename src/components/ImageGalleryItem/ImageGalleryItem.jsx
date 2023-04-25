import PropTypes from "prop-types";
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL, openModal}) =>{
    return(
        <li 
        className={css.ImageGalleryItem}
        onClick={() => {openModal({largeImageURL:largeImageURL, tags:tags})}}
        >
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
}