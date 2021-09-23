import React from "react"

const Show = ({ showItem }) => {
  // const removeTag = (summary) => {}

  let removeHTML = input => {
    let tmp = document.createElement('div');
    tmp.innerHTML = input;
    return tmp.textContent || tmp.innerText || '';
  } 

  console.log(showItem.show.image.medium)
  return (
    <div key={showItem.id} className="show-item">
      <img src={showItem.show.image.medium} alt="" />
      <h2>{showItem.show.name}</h2>
      <a target="_blank" rel="noopener noreferrer" href={showItem.url}>
        Link to TV Show
      </a>
      <p className="summary">{removeHTML(showItem.show.summary)}</p>
    </div>
  )
}

export default Show
