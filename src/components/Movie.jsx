import React from "react"

const Movie = ({ movie }) => {
  const { show } = movie
  // console.log(show.image.medium)
  return (
    <div key={show.id} className="movie-container">
      <img src={show.image.medium} alt="" />
      <h2>{show.name}</h2>
      <a target="_blank" rel="noopener noreferrer" href={show.url}>
        Link to Movie
      </a>
    </div>
  )
}

export default Movie
