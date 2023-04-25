import { Component } from 'react'
import { createPortal } from 'react-dom'
import css from './Modal.module.css'

const modaleRoot = document.querySelector('#modal-root')

export class Modal extends Component{ 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
    handleKeydown = e => {
        if (e.code === 'Escape') {
          this.props.onClose();
        }
    };
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          this.props.onClose();
        }
    };   
    render(){
        const {largeImageURL, tag} = this.props;
        return createPortal(
        <div onClick={this.props.onClose} className={css.Overlay}>
            <div className={css.Modal}>
                <img src={largeImageURL} alt={tag} />
            </div>
        </div>,
        modaleRoot)
    }
}