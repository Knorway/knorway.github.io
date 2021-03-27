import { Box, Stack, VStack } from '@chakra-ui/react';
import ThemeToggler from '../components/ThemeToggler';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
	return (
		<Box maxWidth='768px' m='auto'>
			<VStack mt='4' mx='4'>
				<Stack
					as='nav'
					isInline
					width='100%'
					justifyContent='space-between'
					overflow='initial'
					alignItems='center'
					position='relative'
					mb='16'
				>
					<Navbar />
					<ThemeToggler />
				</Stack>
				{children}
			</VStack>
		</Box>
	);
};

export default AppLayout;
