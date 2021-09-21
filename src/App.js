import React, { useState, useEffect } from "react"
import "./App.css"
import Movie from "./components/Movie"
// import cors from "cors"
import axios from "axios"

function App() {
  const [movies, setMovies] = useState([])
  const [movieValue, setMovieValue] = useState("")

  // useEffect(() => {
  //   cors()
  // }, [])

  useEffect(() => {
    axios
      .get("/search/shows?q=zombie")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          console.log(res.data)
          setMovies(res.data)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const fetchMoviesName = (movie) => {
    axios
      .get(`/search/shows?q=${movie}`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setMovies(res.data)
        }
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    const value = e.target.value
    setMovieValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (movieValue) {
      fetchMoviesName(movieValue)
    } else {
      return
    }
  }

  return (
    <div className="App">
      <form className="searchField" onSubmit={handleSubmit}>
        <input type="text" value={movieValue} onChange={handleChange} />
        <button type="submit">Search for title</button>
      </form>
      <div className="movies-container">
        {movies.map((movie) =>
          //Display movie unless image isnt found
          movie.show.image ? <Movie key={movie.id} movie={movie} /> : null
        )}
      </div>
    </div>
  )
}

export default App
