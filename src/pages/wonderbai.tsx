// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layoutModal"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import talent from '../data/talent';

import closeX from '../images/x.svg';

const profilePictureStyles = {
  maxWidth: '100%'
}

const TALENT_INDEX = 0;

const ModalExamplePage = () => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          <Link to={closeTo || '/'} style={{
            width: '15px',
            padding: 30,
            float: 'right'
          }}>
            <img style={{ width: '15px' }} src={closeX} alt="Close" />
          </Link>

          <div style={{
            maxWidth: '300px',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
        
            <img style={profilePictureStyles} src={talent[TALENT_INDEX].image} alt={talent[TALENT_INDEX].text}/>
            
            <h1>
              {talent[TALENT_INDEX].text}
            </h1>

            {talent[TALENT_INDEX].stream &&
              <p><a href={talent[TALENT_INDEX].stream}>STREAM</a></p>
            }

            {talent[TALENT_INDEX].description}
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
)

export default ModalExamplePage