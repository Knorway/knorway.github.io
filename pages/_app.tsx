import { ChakraProvider } from '@chakra-ui/react';
import AppLayout from '../src/layouts/AppLayout';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ChakraProvider>
	);
}

export default MyApp;
