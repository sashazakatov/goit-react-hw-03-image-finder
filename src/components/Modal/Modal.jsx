import css from './Modal.module.css'

const Modal = ({tag, largeImageURL}) => {
    return(
    <div className={css.Overlay}>
        <div className={css.Modal}>
            <img src={largeImageURL} alt={tag} />
        </div>
    </div>
    )
}