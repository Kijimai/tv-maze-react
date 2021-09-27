import React from "react"

const Show = ({ showItem }) => {
  // const removeTag = (summary) => {}

  let removeHTML = (input) => {
    let tmp = document.createElement("div")
    tmp.innerHTML = input
    return tmp.textContent || tmp.innerText || ""
  }

  return (
    <div key={showItem.show.id} className="show-item">
      <img src={showItem.show.image.medium} alt={showItem.show.name} />
      <h2>{showItem.show.name}</h2>
      <a
        className="show-link"
        target="_blank"
        rel="noopener noreferrer"
        href={showItem.show.url}
      >
        Link to TV Show
      </a>
      <p className="summary">{removeHTML(showItem.show.summary)}</p>
    </div>
  )
}

export default Show
