import { Component } from 'react';
import css from './App.module.css'
import {Searchbar} from 'components/Searchbar'
import {ImageGallery} from 'components/ImageGallery'
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';

export class App extends Component{
  state = {
    value: '',
    page: 1,
    pending: false,
    visual: false,
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
  render(){
    const {value, page, pending, visual} = this.state
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendelSubmit}></Searchbar>
        <ImageGallery value={value} page={page} onChangePending={this.changePending} onChangeVisual={this.changeVisual}/>
        {pending && <Loader/>}
        {visual && <Button onClick={this.hendelOnClick}/>}
      </div>
    );
  }
};