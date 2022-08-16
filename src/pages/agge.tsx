// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/layoutModal"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Helmet } from 'react-helmet';
import TalentPage from '../components/talentPage';

import talent from '../data/talent';

import closeX from '../images/x.svg';

const profilePictureStyles = {
  maxWidth: '100%'
}

const TALENT_INDEX = 1;

const ModalExamplePage = () => (
  <Layout>
    <TalentPage
      {... {
        title: talent[TALENT_INDEX].text,
        name: talent[TALENT_INDEX].name,
        image: talent[TALENT_INDEX].image,
        stream: talent[TALENT_INDEX].stream
      }}
      />
  </Layout>
)

export default ModalExamplePage