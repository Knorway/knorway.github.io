import { Box, HStack, Text } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/transition';
import Head from 'next/head';
import Intro from '../../src/components/about/Intro';
import ProjectList from '../../src/components/about/ProjectList';
import SectionDivider from '../../src/components/about/SectionDivider';
import ContactList from '../../src/components/about/ContactList';

function index() {
	return (
		<HStack w='100%' justifyContent='center'>
			<Fade in={true}>
				<Head>
					<title>about • 김노르웨이의 블로그</title>
				</Head>
				<Intro />
				<SectionDivider section='포트폴리오' />
				<HStack w='100%'>
					<ProjectList />
				</HStack>
				<SectionDivider section='컨택트' />
				<ContactList />
			</Fade>
		</HStack>
	);
}

export default index;
