import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				fontFamily: 'body',
				// color: mode('gray.800', 'gray.100')(props),
				// bg: mode('white', '#171717')(props),
				color: mode('gray.700', 'whiteAlpha.900')(props),
				bg: mode('white', 'gray.800')(props),
				lineHeight: 'base',
				overflowY: 'scroll',
			},
		}),
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
});

export default overrides;
