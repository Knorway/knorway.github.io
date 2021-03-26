import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import ThemeToggler from '../components/ThemeToggler';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
	return (
		<Box maxWidth='960px' m='auto'>
			<VStack mt='4'>
				<Stack
					as='nav'
					isInline
					width='100%'
					maxWidth='1024px'
					justifyContent='space-between'
					overflow='initial'
					alignItems='center'
					position='relative'
					mb='16'
				>
					<Navbar />
					<Text
						fontSize='3xl'
						fontWeight='300'
						position='absolute'
						m='auto'
						left='50%'
						top='50%'
						transform='translate(-50%, -50%)'
					>
						김노르웨이의 블로그
					</Text>
					<ThemeToggler />
				</Stack>
				{children}
			</VStack>
		</Box>
	);
};

export default AppLayout;
