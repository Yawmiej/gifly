import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <form>
            <input 
                type="text"
                placeholder="Search gif"
            />
            <input 
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default SearchBox;