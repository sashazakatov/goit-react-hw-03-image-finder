import { Component } from 'react';
import css from './App.module.css'
import {Searchbar} from 'components/Searchbar'

export class App extends Component{
  state = {
    value: '',
  }
  hendelSubmit = ({value}) => {
    this.setState({value});
  }
  render(){
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendelSubmit}></Searchbar>
      </div>
    );
  }
};
