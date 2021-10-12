import React from "react"
import SearchField from "../components/SearchField"
import Show from "../components/Show"
import { useGlobalContext } from "../context"

const Main = () => {
  const { shows } = useGlobalContext()
  return (
    <div className="App">
      <SearchField />
      <div className="shows-container">
        {shows.map((showItem) =>
          //Display show unless image isnt found
          showItem.show.image ? (
            <Show key={showItem.show.id} showItem={showItem} />
          ) : null
        )}
      </div>
    </div>
  )
}

export default Main
