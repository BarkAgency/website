import React from 'react';
import Layout from '../components/layoutModal';
import TalentPage from '../components/talentPage';
import talent from '../data/talent';

const TALENT_INDEX = 5;

const ModalExamplePage = () => (
	<Layout>
		<TalentPage
			{...{
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
);

export default ModalExamplePage;
