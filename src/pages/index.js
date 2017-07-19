import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"


export default class Index extends React.Component {
  componentDidMount() {
    const ico_utc = Date.UTC(2017, 7, 15, 16, 20)
    const now_utc = new Date().getTime()
    const clock = $('.site-flipclock').FlipClock((ico_utc - now_utc) / 1000, {
      clockFace: 'DailyCounter',
      countdown: true,
    })
    void clock;
  }

  render() {
    return (
      <div className="site-page site-page--index">

        <div className="site-flipclock"></div>

        <Link className="site-link "to="/page-2/">Go to page 2</Link>

      </div>
    )
  }
}
