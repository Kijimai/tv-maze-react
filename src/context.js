import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [shows, setShows] = useState([])
  const [showValue, setShowValue] = useState("")
  const handleChange = (e) => {
    const value = e.target.value
    setShowValue(value)
  }

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=zombies")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (showValue) {
      fetchShowsName(showValue)
    } else {
      return
    }
  }

  return (
    <AppContext.Provider
      value={{
        handleChange,
        handleSubmit,
        fetchShowsName,
        shows,
        showValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
