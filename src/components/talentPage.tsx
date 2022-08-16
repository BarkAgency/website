import React from 'react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Helmet } from 'react-helmet';

import closeX from '../images/x.svg';

const profilePictureStyles = {
  maxWidth: '100%'
}

const cornerLinkStyles = {
  color: 'rgba(0, 0, 0, 0.2)',
  textTransform: 'uppercase',
  textDecoration: 'none'
}

const talentLinksStyles = {
  color: '#000000',
  display: 'block',
  textTransform: 'uppercase',
  textDecoration: 'none'
}

type TalentPageProps = {
    title: string;
    name: string;
    image: string;
    stream?: string;
    instagram?: string;
    youtube?: string;
    presskit?: string;
}

const TalentPage = ({
    title,
    name,
    image,
    stream,
    instagram,
    youtube,
    presskit
}: TalentPageProps) => (

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
              <title>{title} • Bark Agency</title>
            </Helmet>

            <section style={{
              textAlign: 'center',  
              background: '#fff',
              fontSize: '0.7rem',
              padding: 26,
              color: 'rgba(0, 0, 0, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
            }}>

              <Link style={ {
                  color: 'rgba(0, 0, 0, 0.2)',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                } } to={`/produkt`}>
                Cases
              </Link>
          
              <Link to={closeTo || '/'} style={{
                width: '15px',
                float: 'right'
              }}>
                <img style={{ width: '10px' }} src={closeX} alt="Close" />
              </Link>

            </section>

          <div style={{
            textTransform: 'uppercase',
            maxWidth: '264px',
            fontSize: '11px',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
        
            <img style={profilePictureStyles} src={image} alt={title}/>
            
            <div>
              <p>
                {title}<br />{name}
              </p>
            </div>

            <div>
              {stream &&
                <Link style={ {
                    color: '#000000',
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                  } } to={stream}>
                  STREAM
                </Link>
              }
              {instagram &&
                <Link style={ {
                    color: '#000000',
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                  } } to={instagram}>
                  INSTAGRAM
                </Link>
              }
              {youtube &&
                <Link style={ {
                    color: '#000000',
                    display: 'block',
                    textTransform: 'uppercase',
                    textDecoration: 'none'
                  } } to={youtube}>
                  YOUTUBE
                </Link>
              }
               {presskit &&
                <Link style={ {
                  color: '#000000',
                  display: 'block',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                } } to={presskit}>
                PRESS KIT
              </Link>
              }
            </div>
          </div>
          <section style={{
              textAlign: 'center',  
              background: '#fff',
              fontSize: '0.7rem',
              padding: 26,
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

              <AnchorLink gatsbyLinkProps={{ style: cornerLinkStyles }} to={`/#talent`} title={"talent"} />

            </section>
        </div>
      )}
    </ModalRoutingContext.Consumer>
)

export default TalentPage;