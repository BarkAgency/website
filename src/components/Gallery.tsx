import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import talent from '../data/talent';

const listItemLinkStyles = {
	color: 'rgba(255, 255, 255, 0.85)',
	textDecoration: 'none',
	textTransform: 'uppercase',
	fontSize: '10px',
};

const GalleryUl = styled.ul`
	padding-left: 0px;
	display: flex;
	flex-flow: row wrap;
	margin: 0px;
	align-items: center;
`;

const GalleryLi = styled.li`
	width: 199px;
	list-style-type: none;
	display: inline-block;
	margin: 0.5rem;
`;

const GalleryImg = styled.img`
	max-width: 100%;
	min-width: 170px;
	max-height: 400px;
`;

const GalleryZoom = styled.div`
	max-width: 100%;
	min-width: 170px;
	height: 298px;
	overflow: hidden;
	& img {
		transition: all 0.4s ease-in-out;
	}
	&:hover img {
		transform: scale(1.1);
	}
`;

const StyledLink = styled(Link)`
	color: rgba(255, 255, 255, 0.85);
	text-decoration: none;
	text-transform: uppercase;
	font-size: 10px;
`;

const Gallery = ({}) => (
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
				<GalleryLi key={talent.url}>
					<StyledLink
						state={{
							modal: true,
						}}
						to={`${talent.url}`}
					>
						<GalleryZoom>
							<GalleryImg src={talent.image} alt={talent.text} />
						</GalleryZoom>

						<p>{talent.text}</p>
					</StyledLink>
				</GalleryLi>
			))}
		</GalleryUl>
	</section>
);

export default Gallery;
