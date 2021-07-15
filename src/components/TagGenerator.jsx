import { Badge, Stack } from '@chakra-ui/layout';

const colorScheme = {
	Javascript: {
		variant: 'solid',
		background: 'yellow.400',
		color: 'gray.900',
	},
	Typescript: {
		variant: 'solid',
		colorScheme: 'blue',
	},
	React: {
		variant: 'solid',
		background: 'black',
		color: 'cyan.300',
	},
	Next: {
		variant: 'solid',
		background: 'gray.100',
		color: 'black',
	},
	Node: {
		variant: 'solid',
		background: 'green.600',
		color: 'white',
	},
	HTML: {
		variant: 'solid',
		background: '#cd5634',
		color: 'white',
	},
	CSS: {
		variant: 'solid',
		background: '#2f6eb5',
		color: 'white',
	},
	Express: {
		variant: 'solid',
		background: '#f7f7f7',
		color: 'black',
	},
	//TODO: 일반
};

const TagGenerator = ({ tags }) => {
	return (
		<Stack direction='row'>
			{tags?.split(',').map((tag, i) => (
				<Badge {...colorScheme[tag.trim()]} key={i} textTransform='capitalize'>
					{tag}
				</Badge>
			))}
		</Stack>
	);
};

export default TagGenerator;
