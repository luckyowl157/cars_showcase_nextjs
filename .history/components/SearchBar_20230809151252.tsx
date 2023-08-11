'use client'

import { SearchManufacturer } from './'

const SearchBar = () => {

  const handleSearch = () => {

  }

  return (
    <form onSubmit={handleSearch} className='searchbar'>
      <div className="searchbar__items">
        <SearchManufacturer />
      </div>
    </form>
  )
}

export default SearchBar