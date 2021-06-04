import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=G-8H4602H81M'
					></script>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
