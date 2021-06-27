import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Box } from '@chakra-ui/layout';

export default function CodeHighlight({ children, className }) {
	const language = className?.replace(/language-/, '');

	return (
		<Box w={['350px', '600px', '100%']}>
			<Highlight
				{...defaultProps}
				code={children}
				language={language}
				theme={theme}
				data-src='2'
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre
						className={className}
						style={{
							...style,
							padding: '20px',
							paddingBottom: '0',
							fontSize: '14px',
							fontWeight: 'bold',
							borderRadius: '10px',
							overflowX: 'auto',
							// wordWrap: 'break-word',
							// fontFamily: 'monaco',
						}}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</Box>
	);
}
