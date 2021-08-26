import { Box, HStack, Text } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { SiGithub } from 'react-icons/si';
import { IoMailSharp } from 'react-icons/io5';

const ContactList = () => {
	return (
		<HStack
			fontSize='14px'
			fontWeight='semibold'
			spacing='6'
			flexDir={['column', 'row']}
			paddingBottom='8px'
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
	);
};

export default ContactList;
