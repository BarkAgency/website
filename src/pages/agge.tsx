// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/layoutModal"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Helmet } from 'react-helmet';

import talent from '../data/talent';

import closeX from '../images/x.svg';

const profilePictureStyles = {
  maxWidth: '100%'
}

const TALENT_INDEX = 1;

const ModalExamplePage = () => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div
          style={{
            height: '100%',
            minHeight: '100vh',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

            <Helmet>
              <title>{talent[TALENT_INDEX].text} • Bark Agency</title>
            </Helmet>

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
                } } to={`/#cases`}>
                Cases
              </Link>
          
              <Link to={closeTo || '/'} style={{
                width: '10px',
                padding: 30,
                float: 'right'
              }}>
                <img style={{ width: '10px' }} src={closeX} alt="Close" />
              </Link>

            </section>

          <div style={{
            maxWidth: '264px',
            fontSize: '11px',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
        
            <img style={profilePictureStyles} src={talent[TALENT_INDEX].image} alt={talent[TALENT_INDEX].text}/>
            
            <div>
              <p>
                {talent[TALENT_INDEX].text}<br />{talent[TALENT_INDEX].name}
              </p>
            </div>

            <div>
              {talent[TALENT_INDEX].stream &&
                <Link style={ {
                    color: '#000000',
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                  } } to={talent[TALENT_INDEX].stream}>
                  STREAM
                </Link>
              }
              {talent[TALENT_INDEX].instagram &&
                <Link style={ {
                    color: '#000000',
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                  } } to={talent[TALENT_INDEX].instagram}>
                  INSTAGRAM
                </Link>
              }
               {talent[TALENT_INDEX].presskit &&
                <Link style={ {
                  color: '#000000',
                  display: 'block',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                } } to={talent[TALENT_INDEX].presskit}>
                PRESS KIT
              </Link>
              }
            </div>
          </div>
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
                } }} to={`/#talent`} title={"talent"} />

            </section>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
)

export default ModalExamplePage