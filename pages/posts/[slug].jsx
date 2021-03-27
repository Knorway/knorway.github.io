import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import MDXComponents from '../../src/components/MDXComponent';
import TagGenerator from '../../src/components/TagGenerator';

const Post = ({ data, content }) => {
	return (
		<Box alignSelf='flex-start'>
			<Head>
				<title>{data.title}</title>
			</Head>
			<VStack mb='12' align='flex-start'>
				<Text as='h1' fontSize='4xl' fontWeight='bold'>
					{data.title}
				</Text>
				<HStack mb='5'>
					<Text ps='p' fontSize='sm' color='gray' fontWeight='500'>
						{data.publishedAt} ·
					</Text>
					<TagGenerator tags={data.tags} />
				</HStack>
				<MDXProvider components={MDXComponents}>
					<MDX>{content}</MDX>
				</MDXProvider>
			</VStack>
		</Box>
	);
};

export default Post;

export async function getStaticPaths() {
	const fileNames = fs.readdirSync('posts');
	const paths = fileNames.map((fileName) => ({
		params: { slug: fileName.replace('.md', '') },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
	const { data, content } = matter(file);

	return {
		props: {
			data,
			content,
		},
	};
}
