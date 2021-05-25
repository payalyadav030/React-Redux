import React, { Component } from 'react';

class Input extends Component{
    state ={
        searchTerm:"",
    }
    handleInputChange=(val)=>this.setState({
        searchTerm:val
    });
    render(){
        const {searchTerm} =this.state
        return(
            <div>
                <input className={this.props.className} value={searchTerm} onChange={(e)=>this.handleInputChange(e.target.value)} />
                <button className="search" onClick={()=>this.props.getSearchTerm(searchTerm)}>Search</button>
            </div>
        )
    }
}

export default Input;