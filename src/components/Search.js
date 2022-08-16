import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("")
  const onChange = (search) => {
    setSearch(search)
    
  }
  return (
    <div className='search pt-3'>
      <form>
        <input type="text" className='form-control' placeholder='Search for a team' value={search} onChange={(e) => onChange(e.target.value)}>
        </input>
      </form>
    </div>
  )
}

export default Search