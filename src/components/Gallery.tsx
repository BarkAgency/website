import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import talent from '../data/talent';

const GalleryUl = styled.ul`
	padding-left: 0px;
	display: flex;
	flex-flow: row wrap;
	margin: 0px;
	align-items: center;
	@media screen and (max-width: 1350px) {
		width: 645px;
	}
	@media screen and (max-width: 700px) {
		width: 430px;
	}
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
		transition: all 0.3s ease-in-out;
	}
	&:hover img {
		transform: scale(1.04);
	}
`;

const GalleryDiv = styled.div`
	padding: 26px;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: rgba(255, 255, 255, 0.85);
	text-decoration: none;
	text-transform: uppercase;
	font-size: 10px;
`;

const Gallery = ({}) => (
	<GalleryDiv>
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
	</GalleryDiv>
);

export default Gallery;
