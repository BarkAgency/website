import * as React from "react"
import logo from "../images/bark.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Link } from 'gatsby';

import talent from '../data/talent';

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "#000000",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
  alignItems: 'center'
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  //maxWidth: 560,
  maxWidth: '20%',
  marginBottom: 30,
  listStyleType: "none",
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
  maxHeight: '400px'
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
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
  height: "100vh",
  //padding: 40,
  margin: 'auto',
  display: 'block',
  fontSize: '3.5rem'
}

const docLinks = [
  {
    text: "Talent",
    url: "/talent",
    color: "#8954A8",
  },
  {
    text: "Cases",
    url: "/cases",
    color: "#8954A8",
  },
  {
    text: "Kontakt",
    url: "/kontakt",
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
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Bark Agency</title>
        
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
              justifyContent: 'end',
              fontSize: '1.5rem',
              height: '100%'
            }}>


          <ul style={doclistStyles}>
            {docLinks.map(doc => (
              <li style={docLinkStyle} key={doc.url}>
                <a
                  style={linkStyle}
                  href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
                >
                  {doc.text}
                </a>
              </li>
            ))}
          </ul>

            <h2 style={headingStyles}>
              Bark Agency giver dig en plads ved spisebordet hos præcist den målgruppe du gerne vil ramme.
              Ved at have influencere der fastholder deres publikum i gennemsnit 45 minutter ad gangen, med muligheden for konstant eksponering og dialog om netop dit budskab eller dit produkt, sikrer vi jer muligheden for succes. 
            </h2>
          </section>
    
        </section>
    
        <section style={{ ...viewZoneStyles }}>
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

        <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
        <section style={{
          width: '70%',
          margin: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          height: '100%'
        }}>
          <div>
            <p>Bark Agency<br />
              <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="mailto:hello@barkagency.dk">hello@barkagency.dk</a><br />
              <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="tel:+4522909399">+45 22 90 93 99</a>
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
          padding: 20
        }}>
          BARK AGENCY © 2022    ALL RIGHTS RESERVED    LEGAL NOTICE
        </section>

      </main>
    </Layout>
  )
}

export default IndexPage
