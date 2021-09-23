//Searchable movies and tv shows
//click to show more info about the show
//Save to watch list -- saved on localstorage
//when movie item is clicked inside the watch list, go to page with remove or rating system

import React, { useState, useEffect } from "react"
import "./App.css"
import Show from "./components/Show"
// import cors from "cors"
import axios from "axios"

function App() {
  const [shows, setShows] = useState([])
  const [showValue, setShowValue] = useState("")

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=zombies")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          // console.log(res.data)
          setShows(res.data)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const fetchShowsName = (show) => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${show}`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setShows(res.data)
        }
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    const value = e.target.value
    setShowValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (showValue) {
      fetchShowsName(showValue)
    } else {
      return
    }
  }

  return (
    <div className="App">
      <div className="header">
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
      </div>

      <div className="shows-container">
        {shows.map((showItem) =>
          //Display show unless image isnt found
          showItem.show.image ? (
            <Show key={showItem.id} showItem={showItem} />
          ) : null
        )}
      </div>
    </div>
  )
}

export default App
