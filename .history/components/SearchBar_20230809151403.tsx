'use client'

import {useState} from 'react'

import { SearchManufacturer } from './'

const SearchBar = () => {
  const [manufacture, setManufacture] = useState('')
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