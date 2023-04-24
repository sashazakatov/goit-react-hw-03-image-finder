import { Component } from "react";
import css from './Searchbar.module.css';
import PropTypes from "prop-types";

export class Searchbar extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        value: ''
    }
    hendelFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state);
        this.setState({value:''})
    }
    hendelInputChange = (e) => {
        const {name, value} = e.currentTarget
        this.setState({[name]:value})
    }
    render(){
        return(
        <header className="searchbar">
        <form className={css.Searchbar} onSubmit={this.hendelFormSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
            className={css.SearchbarInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name='value'
            value={this.state.value}
            onChange={this.hendelInputChange}
          />
        </form>
      </header>)
    }
}