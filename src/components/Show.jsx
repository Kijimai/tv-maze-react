import React from "react"
import { Link } from "react-router-dom"
const Show = ({ showItem }) => {
  // const removeTag = (summary) => {}
  // console.log(showItem)


  let removeHTML = (input) => {
    let tmp = document.createElement("div")
    tmp.innerHTML = input
    return tmp.textContent || tmp.innerText || ""
  }

  return (
    <div key={showItem.show.id} className="show-item">
      <img src={showItem.show.image.medium} alt={showItem.show.name} />
      <div className="show-info">
        <h2>{showItem.show.name}</h2>
        <Link
          to={`/show/${showItem.show.id}`}
          className="show-link"
          target="_blank"
          rel="noopener noreferrer"
          href={showItem.show.url}
        >
          Link to TV Show
        </Link>
        <p className="summary">{removeHTML(showItem.show.summary)}</p>
      </div>
    </div>
  )
}

export default Show
