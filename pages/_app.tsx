import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import AppLayout from '../src/layouts/AppLayout';
import theme from '../theme';

declare global {
	interface Window {
		dataLayer: any;
	}
}

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag(...args: any) {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-8H4602H81M');
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ChakraProvider>
	);
}

export default MyApp;
