import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Helmet } from 'react-helmet';

import closeX from '../images/x.svg';
import Copyright from './copyright';

const profilePictureStyles = {
	maxWidth: '100%',
	marginBottom: '1rem',
};

const cornerLinkStyles = {
	color: '#000',
	textTransform: 'uppercase',
	textDecoration: 'none',
};

const talentLinksStyles = {
	color: '#000000',
	display: 'block',
	textTransform: 'uppercase',
	textDecoration: 'none',
};

type TalentPageProps = {
	title: string;
	name: string;
	image: string;
	stream?: string;
	instagram?: string;
	youtube?: string;
	presskit?: string;
};

const TalentPage = ({
	title,
	name,
	image,
	stream,
	instagram,
	youtube,
	presskit,
}: TalentPageProps) => (
	<div
		style={{
			height: '100%',
			minHeight: '100vh',
			margin: 'auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<Helmet>
			<title>{title} • Bark Agency</title>
		</Helmet>

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
				Cases
			</Link>

			<Link
				to={'/#talent'}
				style={{
					width: '15px',
					float: 'right',
				}}
			>
				<img style={{ width: '10px' }} src={closeX} alt="Close" />
			</Link>
		</section>

		<div
			style={{
				textTransform: 'uppercase',
				maxWidth: '264px',
				fontSize: '11px',
				height: '100%',
				margin: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<img style={profilePictureStyles} src={image} alt={title} />

			<div>
				<p>
					{title}
					<br />
					{name}
				</p>
			</div>

			<div>
				{stream && (
					<Link
						style={{
							color: '#000000',
							display: 'block',
							textTransform: 'uppercase',
							textDecoration: 'none',
						}}
						to={stream}
					>
						STREAM
					</Link>
				)}
				{instagram && (
					<Link
						style={{
							color: '#000000',
							display: 'block',
							textTransform: 'uppercase',
							textDecoration: 'none',
						}}
						to={instagram}
					>
						INSTAGRAM
					</Link>
				)}
				{youtube && (
					<Link
						style={{
							color: '#000000',
							display: 'block',
							textTransform: 'uppercase',
							textDecoration: 'none',
						}}
						to={youtube}
					>
						YOUTUBE
					</Link>
				)}
				{presskit && (
					<Link
						style={{
							color: '#000000',
							display: 'block',
							textTransform: 'uppercase',
							textDecoration: 'none',
						}}
						to={presskit}
					>
						PRESS KIT
					</Link>
				)}
			</div>
		</div>
		<section
			style={{
				textAlign: 'center',
				background: '#fff',
				fontSize: '0.7rem',
				padding: 26,
				color: 'rgba(0, 0, 0, 0.2)',
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
				gatsbyLinkProps={{ style: cornerLinkStyles }}
				to={`/#talent`}
				title={'talent'}
			/>
		</section>
	</div>
);

export default TalentPage;
