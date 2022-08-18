import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layoutModal"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import talent from '../data/talent';
import closeX from '../images/x.svg';


import Copyright from '../components/copyright';

const cornerLinkStyles = {
  color: '#000',
  textTransform: 'uppercase',
  textDecoration: 'none'
}

const profilePictureStyles = {
  maxWidth: '100%'
}

const headerStyles = {
  fontSize: 11
}


const TALENT_INDEX = 1;

const ProduktPage = () => {
  return (
      <Layout>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',

            height: '100vh',
          }}>

        <section style={{
              textAlign: 'center',  
              background: '#fff',
              fontSize: '0.7rem',
              padding: 26,
              display: 'flex',
              justifyContent: 'space-between',
            }}>

              <Link style={ {
                  color: '#000',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                } } to={`/produkt`}>
                Cases
              </Link>
          
              <Link to={'/'} style={{
                width: '15px',
                float: 'right'
              }}>
                <img style={{ width: '10px' }} src={closeX} alt="Close" />
              </Link>

            </section>
        <section style={{
            width: '70%',
            margin: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            height: '100%',
          }}>


        <div>
            <small style={ headerStyles }>MEN, HVAD ER DET FOR ET MEDIE?<br />
            </small>
            <br />
            Twitch. Hvis ikke du allerede kender mediet, så vend dig mod den nærmeste 13-34 årige og hør om han eller hun ikke kan give dig en beskrivelse. Som et af verdens absolut største websites, ejet af Amazon og med mere end en milliard seere månedligt, sætter mediet en stor streg under hvorfor de giver deres content creators en unik mulighed for at skabe eksponering for deres partnere.
            <br />
            <br />

            <small  style={ headerStyles }>MEN, HVORDAN GØR I DET?</small><br />
            <br />
            Ved at have influencere der fastholder sit publikum i gennemsnit 95 minutter om dagen, med konstant eksponering og dialog om netop dit budskab eller dit produkt, sikrer vi at jeres brand kan komme i mål med netop det i efterspørger. Om det er brandperception, reach, awareness eller bare direkte salg, kan Bark Agency hjælpe jer til at nå slutbrugeren direkte, i lang tid, med en troværdig kilde gennem et selvvalgt medie.<br /><br />

            <small  style={ headerStyles }>HVORFOR IKKE ET ANDET INFLUENCERMEDIE?</small>
            <br />
            <br />
            <small> </small>
            Det kan klart anbefales at sprede sin online-annoncering ud, dog får du ikke samme interaktion med slutbrugeren i nogle andre former for online markedsføring, som du gør hos Bark Agency. Hvor andre medier indbyder til en høj skiprate af betalt indhold, indbyder Twitch til en dialog om de pågældende brands, baseret på live interaktion med seerne.
        </div>

      </section>
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
                  color: '#000',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                } } to={`/produkt`}>
                Produkt
              </Link>
            
              <Copyright />

              <AnchorLink gatsbyLinkProps={{ style: cornerLinkStyles }} to={`/#talent`} title={"talent"} />

            </section>
        </div>
    </Layout>
  )
}

export default ProduktPage
