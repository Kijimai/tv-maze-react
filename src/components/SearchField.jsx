import React from "react"
import { useGlobalContext } from "../context"

const SearchField = () => {
  const { handleChange, handleSubmit, showValue } = useGlobalContext()
  return (
    <>
      <h1 className="main-header">Got a show in mind?</h1>
      <form className="searchField" onSubmit={handleSubmit}>
        <input
          className="searchShow"
          type="text"
          value={showValue}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Search for title
        </button>
      </form>
    </>
  )
}

export default SearchField
