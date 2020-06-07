import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            search:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(evt){
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState(state => ({
            [name]:value
        }));
    }

    handleSearch(evt){
        this.props.history.push(`/food/${this.state.search}`);
        this.setState(state => ({
           search:""
        }));
    }

    render() {
        return (
            <div style={{display:"inline",marginRight:"10px"}}>
                <input name="search" placeholder="Search food" value={this.state.search} onChange={this.handleChange}/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default withRouter(Search);