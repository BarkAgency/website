import * as React from "react"
import logo from "../images/bark.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { AnchorLink } from "gatsby-plugin-anchor-links";
 
import talent from '../data/talent';

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "#000000",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  lineHeight: 1
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  display: 'flex',
  flexDirection: 'row',
  //justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
}
const menuStyles = {
  paddingLeft: 0,
  display: 'flex',
  justifyContent: 'space-between'
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  //maxWidth: 560,
  minWidth: 200,
  maxWidth: '20%',
  marginBottom: 30,
  listStyleType: "none",
  flex: '50%',
  display: `inline-block`,
  padding: '.5rem',
}
const listItemLinkStyles = {
  color: 'rgba(255, 255, 255, 0.85)' ,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '0.8rem'
}

const linkStyle = {
  color: "rgba(0, 0, 0, 0.85)",
  fontWeight: "bold",
  fontSize: 16,
  textTransform: 'uppercase',
  verticalAlign: "5%",
  textDecoration: 'none'
}
const linkImgStyle = {
  maxWidth: '100%',
  minWidth: 170,
  maxHeight: '400px',
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)'
  }
}

const menuLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}
const menuLinkAStyle = {
  color: "rgba(0, 0, 0, 0.85)",
  fontSize: '0.8rem',
  fontWeight: "normal",
  textTransform: 'uppercase',
  verticalAlign: "5%",
  textDecoration: 'none',
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const logoStyles = {
  width: "35%",
  margin: 'auto',
  display: 'block'
}

const viewZoneStyles = {
  width: "100vw",
  minHeight: "100vh",
  //padding: 40,
  margin: 'auto',
  display: 'block',
  fontSize: '3.5rem'
}

const docLinks = [
  {
    text: "Talent",
    url: "talent",
    color: "#8954A8",
  },
  {
    text: "Cases",
    url: "cases",
    color: "#8954A8",
  },
  {
    text: "Kontakt",
    url: "kontakt",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = () => {

    // window.addEventListener(`scroll`, () => {

    //   console.log('scroll')
    // });

  return (
    <Layout>
      <main style={pageStyles}>

        <Helmet>
          <title>Bark Agency</title>
        </Helmet>
      
        <section style={{
          ...viewZoneStyles,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={logoStyles} src={logo} alt="Logo" />
        </section>

        <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
          <section style={{
              margin: 'auto',
              padding: '1em',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontSize: '1.5rem',
              //height: '100%',
              height: '100vh',
            }}>


            <ul style={menuStyles}>
              {docLinks.map(menuLink => (
                <li style={menuLinkStyle} key={menuLink.url}>
                  <AnchorLink gatsbyLinkProps={{ style: menuLinkAStyle }} to={`#${menuLink.url}`} title={menuLink.text} />
                </li>
              ))}
            </ul>

            <h2 style={headingStyles}>
              Bark Agency giver dig en plads ved spisebordet hos præcist den målgruppe du gerne vil ramme.
              Ved at have influencere der fastholder deres publikum i gennemsnit 45 minutter ad gangen, med muligheden for konstant eksponering og dialog om netop dit budskab eller dit produkt, sikrer vi jer muligheden for succes. 
            </h2>
          </section>
    
        </section>
    
        <section id="talent" style={{ ...viewZoneStyles,  display: 'flex' }}>
          <section style={{
            width: '70%',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ul style={listStyles}>
              {talent.map(talent => (
                <li key={talent.url} style={{ ...listItemStyles }}>
                  <span>
                    <Link
                      style={ listItemLinkStyles }
                      state={{
                        modal: true
                      }}
                      to={`${talent.url}`}
                    >
                      <img style={linkImgStyle}  src={talent.image}  alt={talent.text}/>
                      <p>{talent.text}</p>
                    </Link>
                    {talent.badge && (
                      <span style={badgeStyle} aria-label="New Badge">
                        NY!
                      </span>
                    )}
                    
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section id="kontakt" style={{ ...viewZoneStyles, background: '#ffffff' }}>
          <section style={{
            width: '70%',
            margin: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            height: '100vh',
          }}>
            <div>
              <p>Bark Agency<br />
                <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="mailto:hello@barkagency.dk">hello@barkagency.dk</a><br />
                <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="tel:+4523443936">+45 23 44 39 36 </a>
              </p>
              <br />
              <p>
                CVR 43380273<br />
                Vilhelmsro 670<br />
                3480 Fredensborg, Danmark<br />
              </p>
            </div>
          </section>
        </section>

        <section style={{
          textAlign: 'center',  
          background: '#fff',
          fontSize: '0.7rem',
          padding: 20,
          color: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
        }}>

          <Link style={ {
              color: 'rgba(0, 0, 0, 0.2)',
              textTransform: 'uppercase',
              textDecoration: 'none'
            } } to={`/produkt`}>
            Produkt
          </Link>
        
          <div>BARK AGENCY © 2022    ALL RIGHTS RESERVED    LEGAL NOTICE</div>

          <AnchorLink gatsbyLinkProps={{ style: {
              color: 'rgba(0, 0, 0, 0.2)',
              textTransform: 'uppercase',
              textDecoration: 'none'
            } }} to={`#talent`} title={"talent"} />

        </section>

      </main>
    </Layout>
  )
}

export default IndexPage
