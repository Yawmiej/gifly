import React from 'react';
import './SearchBox.css'

const SearchBox = ({search}) => {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search gif"
                id='search'
                onChange={search}
            />
            <button 
                type="button"
                value="Search"
                
            >Search</button>
        </div>
    )
}

export default SearchBox;