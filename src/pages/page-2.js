import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Page2 extends React.Component {
  render() {
    return (
      <div className="site-page site-page--page2">
        <h1>It's coming!</h1>
        <p>Welcome to page 2</p>
        <Link className="site-link" to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
