import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prismjs/themes/prism-tomorrow.css'
import './index.css'
import favicon from '../img/favicon.ico'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      meta={[
        {
          name: 'google-site-verification',
          content: 'KmfzpOTFo90kqlfKU8JomkWmYtUeGEbdbU1unp0j2fM',
        },
        { name: 'keywords', content: 'suke, ,blog' },
      ]}
      link={[
        { rel: 'icon', type: 'image/ico', href: `${favicon}` },
        { rel: 'canonical', href: 'https://suke.io' },
      ]}
    />
    <StyledHeader siteTitle={data.site.siteMetadata.title} />
    <Wrapper>{children()}</Wrapper>
    <Footer />
  </Container>
)

const Container = styled.div``

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 90vh;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const StyledHeader = styled(Header)`
  margin-bottom: 40px;
`

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
