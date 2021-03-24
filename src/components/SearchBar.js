import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = () => {

    return (
        <div className="SearchBar">
            <button>
                <span>
                    <img src="/icons/search-icon.svg" alt="Search" />
                </span>
            </button>
            <form>
                <input name="Search" placeholder="Search artists, playlist or tracks" />
            </form>
        </div>
    )
}

export default SearchBar