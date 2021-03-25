import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';

const categories = [
	{
		title: '홈',
		link: '/',
	},
	{
		title: '포스트',
		link: '/posts',
	},
	{
		title: '포트폴리오',
		link: '/potfolio',
	},
	{
		title: '어바웃',
		link: '/about',
	},
];

const Navbar = () => {
	return (
		<Stack isInline spacing='4' justifyContent='space-between'>
			{categories.map((item) => (
				<NextLink href={item.link} key={item.title}>
					<Link fontWeight='bold'>{item.title}</Link>
				</NextLink>
			))}
		</Stack>
	);
};

export default Navbar;
