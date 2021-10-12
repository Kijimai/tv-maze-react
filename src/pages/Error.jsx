import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>
          <span>404</span> NOT FOUND!
        </h1>
        <h2>Oops! I don't even know where you are!</h2>
        <p>We couldn't find the page you were looking for :(</p>
        <h2>
          Go back to{" "}
          <Link className="btn btn-primary" to="/">
            Home Page
          </Link>
        </h2>
      </div>
    </section>
  )
}

export default Error
