'use client'

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