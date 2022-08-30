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
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import talent from '../data/talent';

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
const headingAccentStyles = {
	color: '#663399',
};
const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: '#8A6534',
	padding: 4,
	backgroundColor: '#FFF4DB',
	fontSize: '1.25rem',
	borderRadius: 4,
};
const listStyles = {
	paddingLeft: 0,
	display: 'flex',
	flexDirection: 'row',
	margin: 0,
	alignItems: 'center',
	flexWrap: 'wrap',
};
const menuStyles = {
	paddingLeft: 0,
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: 0,
};
const listItemStyles = {
	width: 199,
	marginBottom: 30,
	listStyleType: 'none',
	display: `inline-block`,
	margin: '.5rem',
};
const listItemLinkStyles = {
	color: 'rgba(255, 255, 255, 0.85)',
	textDecoration: 'none',
	textTransform: 'uppercase',
	fontSize: '10px',
};

const linkStyle = {
	color: 'rgba(0, 0, 0, 0.85)',
	fontWeight: 'normal',
	fontSize: 16,
	textTransform: 'uppercase',
	verticalAlign: '5%',
	textDecoration: 'none',
};
const linkImgStyle = {
	maxWidth: '100%',
	minWidth: 170,
	maxHeight: '400px',
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

const descriptionStyle = {
	color: '#232129',
	fontSize: 14,
	marginTop: 10,
	marginBottom: 0,
	lineHeight: 1.25,
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

const badgeStyle = {
	color: '#fff',
	backgroundColor: '#088413',
	border: '1px solid #088413',
	fontSize: 11,
	fontWeight: 'bold',
	letterSpacing: 1,
	borderRadius: 4,
	padding: '4px 6px',
	display: 'inline-block',
	position: 'relative' as 'relative',
	top: -2,
	marginLeft: 10,
	lineHeight: 1,
};

const GalleryUl = styled.ul`
	padding-left: 0px;
	display: flex;
	flex-flow: row wrap;
	margin: 0px;
	align-items: center;
`;

const GalleryZoom = styled.div`
	max-width: 100%;
	min-width: 170px;
	max-height: 400px;
	overflow: hidden;
	& img {
		transition: all 0.4s ease-in-out;
	}
	&:hover img {
		transform: scale(1.1);
	}
`;

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
					<section
						style={{
							width: '70%',
							height: '100%',
							margin: 'auto',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<GalleryUl>
							{talent.map((talent) => (
								<li key={talent.url} style={{ ...listItemStyles }}>
									<span>
										<Link
											style={listItemLinkStyles}
											state={{
												modal: true,
											}}
											to={`${talent.url}`}
										>
											<GalleryZoom>
												<img
													style={linkImgStyle}
													src={talent.image}
													alt={talent.text}
												/>
											</GalleryZoom>

											<p>{talent.text}</p>
										</Link>
									</span>
								</li>
							))}
						</GalleryUl>
					</section>
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
