// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import talent from '../data/talent';

const ModalExamplePage = () => (
  <Layout>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header>
              <h1>
                {talent[0].text}
              </h1>

            <p><a href={talent[0].stream}> {talent[0].stream}</a>
            </header>
          )}

          <h2>Modal Page</h2>

          <Link to="/">Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
)

export default ModalExamplePage