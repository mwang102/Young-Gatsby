import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../css/index.css'
import '../../node_modules/animate.css/animate.css'

const Layout = ({ children, data }) => (
  <div >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        padding: '0px 10.0875rem 10.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`