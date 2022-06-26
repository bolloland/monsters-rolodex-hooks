import React from 'react'
import './search-box.styles.css'


const SearchBox = (props) => {
    const {onSearchChange, placeholder, className} = props
    return (
        <input 
            className={className}
            type="search" 
            placeholder={placeholder}
            onChange={onSearchChange} 
        />
    )
}

export default SearchBox
