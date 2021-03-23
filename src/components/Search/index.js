import React from 'react'

const Search = (props) => {
  const { placeholder, onChange } = props;

  return (
    <input
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Search;