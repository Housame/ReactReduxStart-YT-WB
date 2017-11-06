import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }


    render() {
        return (
            <div className="search-bar">
                 <input 
                    placeholder='search'
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}  
                 />
                 {/* Value of the input: {this.state.term}. */}
            </div>
        
    );

        // return <input onChange={e => console.log(e.target.value)}  />;
        // return <input onChange={this.onInputChange} />;
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
