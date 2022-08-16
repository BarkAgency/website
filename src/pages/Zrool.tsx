// pages/modal-example.js

import React from 'react'
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/layoutModal"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Helmet } from 'react-helmet';

import talent from '../data/talent';

import TalentPage from '../components/talentPage';

const TALENT_INDEX = 4;

const ModalExamplePage = () => (
  <Layout>
    <TalentPage
      {... {
        title: talent[TALENT_INDEX].text,
        name: talent[TALENT_INDEX].name,
        image: talent[TALENT_INDEX].image,
        stream: talent[TALENT_INDEX].stream,
        instagram: talent[TALENT_INDEX].instagram,
        youtube: talent[TALENT_INDEX].youtube,
        presskit: talent[TALENT_INDEX].presskit,
      }}
      />
  </Layout>
)

export default ModalExamplePage