import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = ""
    const imgStyle = {
      width: "50%",
      float: "left",
      marginRight: "30px",
      border: "3px double grey"
    };
    const quoteStyle = {
      paddingTop: "150px",
      fontFamily: 'Caveat',
    };
    const infoStyle = {
      fontSize: "0.7em",
      paddingTop: "20px"
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        <div>
        <img style={ imgStyle } src="./ruin.jpg" alt="Ruin" />
        </div>
        
          <div style={ quoteStyle }>
          "Things need not have happened to be true. Tales and adventures are 
          the shadow truths that will endure when mere facts are dust and ashes and forgotten." 
~ Neil Gaiman
          </div>
        
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>

        <div style={ infoStyle }>
        If you're looking for my old blogs, I've migrated <a href="https://meexia.wordpress.com/">Bookie Mee 
        here</a> and <a href="https://thewanderingmee.wordpress.com/">Wandering Mee here</a>, 
        just for archive.
        </div>
      </Layout>
    )
  }
}

export default IndexPage
