//Searchable movies and tv shows
//click to show more info about the show
//Save to watch list -- saved on localstorage
//when movie item is clicked inside the watch list, go to page with remove or rating system

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import "./App.css"
import Show from "./components/Show"
import SearchField from "./components/SearchField"
import { useGlobalContext } from "./context"

function App() {
  const { shows } = useGlobalContext()

  // shows.map((showItem) => console.log(showItem.show.id))
  return (
    <div className="App">
      <div className="header">
        <SearchField />
      </div>
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

export default App
