import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

//import "../../node_modules/reset-css/reset.css"
import "../css/layout.css"
import "../css/typography.css"


export default class Template extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.func,
    }
  }

  render() {
    return (
      <div className="site-root">
        <Helmet title="Joopal Coin"
          meta={[
            { name: "description", content: "The cryptocurrency that backs Joopal Pay." },
            { name: "keywords",    content: "joopal coin, joopal, coin, bitcoin, cryptocurrency, ethereum, ICO" },
          ]} />

        <div className="site-header">
          <div className="site-header--inner">
            <h1 className="site-header--site-title site-title">
              <Link className="site-header--link-home site-link" to="/">
                Joopal Coin</Link></h1>
          </div>
        </div>

        <div className="site-body">
          <div className="site-body--inner">
            {this.props.children()}
          </div>
        </div>

        <div className="site-footer">
          <div className="site-footer--inner">
            <h1 className="site-footer--site-title">
              <Link className="site-footer--link-home site-link" to="/">
                Joopal Coin</Link></h1>
          </div>
        </div>

      </div>
    )
  }
}
