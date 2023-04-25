import { Component } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';

export class Searchbar extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        value: ''
    }
    hendelFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.value);
        this.setState({value:''})
    }
    hendelInputChange = (e) => {
        const {name, value} = e.currentTarget
        this.setState({[name]:value})
    }
    render(){
        return(
        <header className={css.Searchbar}>
        <form className={css.Form} onSubmit={this.hendelFormSubmit}>
          <button className={css.SearchbarButton} type="submit">
            <span>Search</span>
          </button>
      
          <input
            className={css.SearchbarInput}
            type="text"
            placeholder="Search images and photos"
            name='value'
            value={this.state.value}
            onChange={this.hendelInputChange}
          />
        </form>
      </header>)
    }
}