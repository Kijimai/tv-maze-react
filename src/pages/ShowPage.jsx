import React, { useEffect } from "react"
import { useParams, Link } from "react-router"
import { useGlobalContext } from "../context"

const ShowPage = () => {
  const { isLoading } = useGlobalContext()
  const { id } = useParams()

  if (isLoading) {
    return <div>LOADING</div>
  }
}

export default ShowPage
