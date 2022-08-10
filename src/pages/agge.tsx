// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layoutModal"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import talent from '../data/talent';

const profilePictureStyles = {
  maxWidth: '100%'
}

const TALENT_INDEX = 1;

const ModalExamplePage = () => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          <Link to={closeTo || '/'}>
            Close
          </Link>

          <div style={{
            maxWidth: '500px',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        
            <img style={profilePictureStyles} src={talent[TALENT_INDEX].image}  alt={talent[TALENT_INDEX].text}/>
            
            <h1>
              {talent[TALENT_INDEX].text}
            </h1>

            {talent[TALENT_INDEX].stream &&
              <p><a href={talent[TALENT_INDEX].stream}> {talent[TALENT_INDEX].stream}</a></p>
            }

            {talent[TALENT_INDEX].description}
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
)

export default ModalExamplePage