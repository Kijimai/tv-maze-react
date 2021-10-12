import { useState, useEffect } from "react"
import axios from "axios"
const API_ENDPOINT = "https://api.tvmaze.com/search/shows"

export const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: "" })
  const [data, setData] = useState(null)

  const fetchShows = async (url) => {
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          console.log(res.data)
          setData(res.data)
        }
      })
      .catch((err) => console.log(err))
  }
  const handleSubmit = () => {
    fetchShows(`${API_ENDPOINT}${urlParams}`)
  }
}
