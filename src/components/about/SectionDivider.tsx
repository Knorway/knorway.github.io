import { Box, Divider, HStack } from '@chakra-ui/react';

interface ISectionDivider {
	section: string;
}

const SectionDivider = ({ section }: ISectionDivider) => {
	return (
		<HStack width='100%' my='1.5rem'>
			<Divider />
			<Box
				whiteSpace='nowrap'
				fontWeight='bold'
				fontSize='13px'
				color='gray.500'
				px='0.5rem'
			>
				{section}
			</Box>
			<Divider />
		</HStack>
	);
};

export default SectionDivider;
