//Searchable movies and tv shows
//click to show more info about the show
//Save to watch list -- saved on localstorage
//when movie item is clicked inside the watch list, go to page with remove or rating system

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import "./App.css"
import Main from "./pages/Main"
import ShowPage from "./pages/ShowPage"
import Error from "./pages/Error"
import { useGlobalContext } from "./context"

function App() {
  const { shows } = useGlobalContext()

  // shows.map((showItem) => console.log(showItem.show.id))
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main {...shows} />
        </Route>
        <Route path="/show/:id">
          <ShowPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
