/**@jsxImportSource @emotion/react */
import {
	Alert,
	Box,
	Code,
	Divider,
	Heading,
	Link,
	Table,
	TableCaption,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorMode,
} from '@chakra-ui/react';
import CodeHighlight from './CodeHighlight';

const Quote = (props) => {
	const { colorMode } = useColorMode();
	const bgColor = {
		light: 'blue.50',
		dark: 'blue.900',
	};

	return (
		<Alert
			mt={4}
			w='98%'
			bg={bgColor[colorMode]}
			variant='left-accent'
			status='info'
			css={{
				'> *:first-of-type': {
					marginTop: 0,
					marginLeft: 8,
				},
			}}
			{...props}
		/>
	);
};

const Hr = () => {
	const { colorMode } = useColorMode();
	const borderColor = {
		light: 'gray.200',
		dark: 'gray.600',
	};

	return <Divider borderColor={borderColor[colorMode]} my={4} w='100%' />;
};

const MDXComponents = {
	h1: (props) => <Heading as='h1' size='xl' my={4} {...props} />,
	h2: (props) => <Heading as='h2' size='lg' fontWeight='bold' {...props} />,
	h3: (props) => <Heading as='h3' size='md' fontWeight='bold' {...props} />,
	h4: (props) => <Heading as='h4' size='sm' fontWeight='bold' {...props} />,
	h5: (props) => <Heading as='h5' size='sm' fontWeight='bold' {...props} />,
	h6: (props) => <Heading as='h6' size='xs' fontWeight='bold' {...props} />,
	inlineCode: (props) => <Code colorScheme='yellow' fontSize='0.84em' {...props} />,
	br: (props) => <Box height='24px' {...props} />,
	hr: Hr,
	a: (props) => <Link {...props} color='blue.500' isExternal />,
	p: (props) => (
		<Text
			as='p'
			mt={0}
			mb={1}
			lineHeight='tall'
			fontSize='lg'
			fontWeight='500'
			{...props}
		/>
	),
	ul: (props) => <Box as='ul' pt={2} pl={4} ml={2} {...props} />,
	ol: (props) => <Box as='ol' pt={2} pl={4} ml={2} {...props} />,
	li: (props) => <Box as='li' pb={1} {...props} />,
	blockquote: Quote,
	table: (props) => <Table {...props} />,
	thead: (props) => <Thead {...props} />,
	tr: (props) => <Tr {...props} />,
	th: (props) => <Th {...props} />,
	td: (props) => <Td {...props} />,
	caption: (props) => <TableCaption {...props} />,
	code: (props) => <CodeHighlight {...props} />,
};

export default MDXComponents;
