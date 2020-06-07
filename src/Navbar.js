import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Search from './Search'
import './Navbar.css';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack(){
        this.props.history.goBack();
    }

    render() {
        return (
        <nav className="Navbar">
            <div>
                <NavLink exact activeClassName="Navbar-active" to="/">Home</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/Soda">Soda</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/Chips">Chips</NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/Candies">Candies</NavLink>
            </div>
            <div>
                <Search/>
                <button onClick={this.handleGoBack}>Go back</button>
            </div>
        </nav>
        )
    }
}

export default withRouter(Navbar);