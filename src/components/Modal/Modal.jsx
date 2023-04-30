import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from "prop-types";
import css from './Modal.module.css'

const modaleRoot = document.querySelector('#modal-root')

export class Modal extends Component{ 
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }
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
        <div onClick={this.handleBackdropClick} className={css.Overlay}>
            <div className={css.Modal}>
                <img src={largeImageURL} alt={tag} />
            </div>
        </div>,
        modaleRoot)
    }
}