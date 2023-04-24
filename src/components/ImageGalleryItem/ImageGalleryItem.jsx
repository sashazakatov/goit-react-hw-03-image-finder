import PropTypes from "prop-types";
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({webformatURL, tags}) =>{
    return(
        <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}
