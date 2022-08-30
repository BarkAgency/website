import * as React from 'react';
import { useEffect } from 'react';
import logo from '../images/bark.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PanelSnap from 'panelsnap';
import { Helmet } from 'react-helmet';

import Copyright from '../components/copyright';
import Gallery from '../components/Gallery';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// styles
const pageStyles = {
	color: '#232129',
	backgroundColor: '#000000',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	fontSize: 45,
	lineHeight: 1,
	fontWeight: 400,
	textAlign: 'center',
};

const menuStyles = {
	paddingLeft: 0,
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: 0,
};

const linkStyle = {
	color: 'rgba(0, 0, 0, 0.85)',
	fontWeight: 'normal',
	fontSize: 16,
	textTransform: 'uppercase',
	verticalAlign: '5%',
	textDecoration: 'none',
};

const menuLinkStyle = {
	...linkStyle,
	listStyleType: 'none',
	display: `inline-block`,
	marginBottom: 24,
	marginRight: 12,
};
const menuLinkAStyle = {
	color: 'rgba(0, 0, 0, 0.85)',
	fontSize: '11px',
	fontWeight: 'normal',
	textTransform: 'uppercase',
	verticalAlign: '5%',
	textDecoration: 'none',
};

const logoStyles = {
	width: '600px',
	maxWidth: '60%',
	margin: 'auto',
	display: 'block',
};

const viewZoneStyles = {
	minHeight: '100vh',
	margin: 'auto',
	display: 'block',
};

const docLinks = [
	{
		text: 'Talent',
		url: 'talent',
		color: '#8954A8',
	},
	{
		text: 'Cases',
		url: 'cases',
		color: '#8954A8',
	},
	{
		text: 'Kontakt',
		url: 'kontakt',
		color: '#8954A8',
	},
];

// markup
const IndexPage = () => {
	useEffect(() => {
		var panelsnap: any;

		if (typeof window !== 'undefined' && !panelsnap) {
			panelsnap = new PanelSnap({
				panelSelector: 'section[id]',
			}) as any;

			// panelsnap.on('activatePanel', (p: any) => { console.log(p)});

			return () => {
				panelsnap.destroy();
			};
		}
	}, []);

	return (
		<Layout>
			<main style={pageStyles}>
				<Helmet>
					<title>Bark Agency</title>
				</Helmet>

				<section
					id="logo"
					style={{
						...viewZoneStyles,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img style={logoStyles} src={logo} alt="Logo" />
				</section>

				<section id="om" style={{ ...viewZoneStyles, background: '#ffffff' }}>
					<section
						style={{
							margin: 'auto',
							padding: 26,
							textAlign: 'left',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							height: '100vh',
						}}
					>
						<ul style={menuStyles}>
							{docLinks.map((menuLink) => (
								<li style={menuLinkStyle} key={menuLink.url}>
									<AnchorLink
										gatsbyLinkProps={{ style: menuLinkAStyle }}
										to={`#${menuLink.url}`}
										title={menuLink.text}
									/>
								</li>
							))}
						</ul>

						<h2 style={headingStyles}>
							<p>
								Bark Agency leverer live interactive marketing. Vi
								kommercialiserer danske live streamere, og får dit brand og
								budskab igennem til en unik målgruppe med stor effekt.
							</p>
						</h2>
						<div></div>
					</section>
				</section>

				<section id="talent" style={{ ...viewZoneStyles, display: 'flex' }}>
					<Gallery />
				</section>

				<section
					id="kontakt"
					style={{ ...viewZoneStyles, background: '#ffffff' }}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							height: '100vh',
						}}
					>
						<section
							style={{
								width: '70%',
								margin: 'auto',
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '23px',
							}}
						>
							<div>
								<p>
									Bark Agency
									<br />
									<a
										style={{
											textDecoration: 'none',
											color: 'rgba(0, 0, 0, 0.85)',
										}}
										href="mailto:hello@barkagency.dk"
									>
										hello@barkagency.dk
									</a>
									<br />
									<a
										style={{
											textDecoration: 'none',
											color: 'rgba(0, 0, 0, 0.85)',
										}}
										href="tel:+4523443936"
									>
										+45 23443936
									</a>
								</p>
								<p>
									CVR 43380273
									<br />
									Vilhelmsro 670
									<br />
									Fredensborg, Danmark
									<br />
								</p>
							</div>
						</section>

						<section
							style={{
								textAlign: 'center',
								background: '#fff',
								fontSize: '0.7rem',
								padding: 26,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Link
								style={{
									color: '#000',
									textTransform: 'uppercase',
									textDecoration: 'none',
								}}
								to={`/produkt`}
							>
								Produkt
							</Link>

							<Copyright />

							<AnchorLink
								gatsbyLinkProps={{
									style: {
										color: '#000',
										textTransform: 'uppercase',
										textDecoration: 'none',
									},
								}}
								to={`#talent`}
								title={'talent'}
							/>
						</section>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default IndexPage;
