import { Box, HStack, Text } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/transition';
import Head from 'next/head';
import Intro from '../../src/components/about/Intro';
import ProjectList from '../../src/components/about/ProjectList';
import SectionDivider from '../../src/components/about/SectionDivider';
import { AiOutlineMail } from 'react-icons/ai';
import { SiGithub } from 'react-icons/si';
import { IoMailSharp } from 'react-icons/io5';

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
				<HStack
					fontSize='14px'
					fontWeight='semibold'
					spacing='6'
					flexDir={['column', 'row']}
				>
					<Box>
						<IoMailSharp
							style={{
								display: 'inline-block',
								fontSize: '14px',
								marginRight: '6px',
							}}
						/>
						<Text
							color='blue.400'
							as='a'
							href='mailto:rlaxogud921@gmail.com'
							cursor='pointer'
						>
							rlaxogud921@gmail.com
						</Text>
					</Box>
					<Box>
						<SiGithub
							style={{
								display: 'inline-block',
								fontSize: '14px',
								marginRight: '6px',
							}}
						/>
						<Text
							color='blue.400'
							as='a'
							cursor='pointer'
							href='https://github.com/Knorway'
							target='_blank'
						>
							https://github.com/Knorway
						</Text>
					</Box>
				</HStack>
			</Fade>
		</HStack>
	);
}

export default index;
