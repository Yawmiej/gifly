import React from 'react';
import './SearchBox.css'

const SearchBox = ({onSearch}) => {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search gif"
                id='search'
            />
            <button 
                type="button"
                value="Search"
                onClick={onSearch}
            >Search</button>
        </div>
    )
}

export default SearchBox;