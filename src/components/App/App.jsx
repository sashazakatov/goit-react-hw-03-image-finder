import { Component } from 'react';
import css from './App.module.css'
import {Searchbar} from 'components/Searchbar'
import {ImageGallery} from 'components/ImageGallery'
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';

export class App extends Component{
  state = {
    value: '',
    page: 1,
    modal: {},
    pending: false,
    visual: false,
    showModal: false,
  }
  hendelSubmit = (value) => {
    this.changePending();
    this.setState((prevState)=>({value, page: 1}));
  }
  hendelOnClick = () => {
    this.changePending();
    this.setState((prevState)=>({page: prevState.page + 1}))
  }
  changePending = () => {
    this.setState((prevState)=>({
    pending: !prevState.pending,
    }))
  }
  changeVisual = () => {
    this.setState((prevState)=>({
      visual: !prevState.visual,
    }))
  }
  handelOpenModal = ({largeImageURL, tags}) => {
    this.setState(({ images }) => ({
      modal: {largeImageURL, tags},
      showModal: true,
    }));
    // setTimeout(()=>console.log(this.state), 1);
  }
  handleCloseModal = () => this.setState({ showModal: false });
  render(){
    const {value, page, pending, visual, modal, showModal} = this.state
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendelSubmit}></Searchbar>
        <ImageGallery 
          value={value} 
          page={page} 
          onChangePending={this.changePending} 
          onChangeVisual={this.changeVisual}
          openModal={this.handelOpenModal}
        />
        {pending && <Loader/>}
        {visual && <Button onClick={this.hendelOnClick}/>}
        {showModal && <Modal 
          largeImageURL={modal.largeImageURL}
          tag={modal.tags}
          onClose={this.handleCloseModal}
        />}
      </div>
    );
  }
};