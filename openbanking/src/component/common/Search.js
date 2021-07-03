import React from 'react'

const Search = ({ handleClickSearchButton, handleChangeSearchInput }) => {
    return (
        <div>
            <input onChange={handleChangeSearchInput}></input>
            <button onClick={handleClickSearchButton}>search</button>
        </div>
    )
}

export default Search
