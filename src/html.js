import React from "react"
import PropTypes from "prop-types"

let appStyles
if (process.env.NODE_ENV === "production") {
  const appCss = require("../public/styles.css")
  appStyles = (
    <style dangerouslySetInnerHTML={{__html: appCss}} />
  )
}


export default class HTML extends React.Component {
  static get propTypes() {
    return {
      body:               PropTypes.string,
      postBodyComponents: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
      headComponents:     PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
    }
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          {this.props.headComponents}
          <link href="/pace/themes/pace-theme-flat-top.css" rel="stylesheet" />
          <script src="/pace/pace.min.js"></script>
          <script src="/jquery/dist/jquery.slim.min.js"></script>
          <link href="/flipclock/compiled/flipclock.css" rel="stylesheet" />
          <script src="/flipclock/compiled/flipclock.min.js"></script>
          {appStyles}
        </head>

        <body>
          <div id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
