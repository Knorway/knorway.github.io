import { IconButton } from '@chakra-ui/button';
import {
	AddIcon,
	EditIcon,
	ExternalLinkIcon,
	HamburgerIcon,
	RepeatIcon,
} from '@chakra-ui/icons';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import NextLink from 'next/link';

const categories = [
	// {
	// 	title: '홈',
	// 	link: '/',
	// },
	// {
	// 	title: '포스트',
	// 	link: '/posts',
	// },
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
		<>
			<Stack
				isInline
				spacing='4'
				justifyContent='space-between'
				display={['none', 'none', 'flex']}
			>
				{categories.map((item) => (
					<NextLink href={item.link} key={item.title}>
						<Link fontWeight='bold' _hover={{ textDecoration: 'none' }}>
							{item.title}
						</Link>
					</NextLink>
				))}
				<Text
					fontSize='4xl'
					fontWeight='500'
					position='absolute'
					m='auto'
					left='50%'
					top='50%'
					transform='translate(-50%, -50%)'
				>
					<NextLink href='/' className='sdf'>
						<Link
							paddingBottom='2'
							display='inline-block'
							_hover={{ textDecoration: 'none' }}
						>
							knorway.github.io
						</Link>
					</NextLink>
				</Text>
			</Stack>
			<Box display={['block', 'block', 'none']}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						size='md'
						variant='outline'
					/>
					<MenuList>
						<MenuItem icon={<AddIcon />} command='⌘T'>
							New Tab
						</MenuItem>
						<MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
							New Window
						</MenuItem>
						<MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
							Open Closed Tab
						</MenuItem>
						<MenuItem icon={<EditIcon />} command='⌘O'>
							Open File...
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		</>
	);
};

export default Navbar;
