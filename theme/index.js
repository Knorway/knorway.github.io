import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
	styles: {
		global: (props) => ({
			body: {
				fontFamily: 'body',
				color: mode('gray.800', 'white')(props),
				bg: mode('white', '#171717')(props),
				// color: mode('gray.800', 'whiteAlpha.900')(props),
				// bg: mode('white', 'gray.800')(props),
				lineHeight: 'base',
			},
		}),
	},
};

export default extendTheme(overrides);
