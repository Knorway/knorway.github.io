import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import MDXComponent from '../../src/components/MDXComponent';
import { Box, Text, VStack } from '@chakra-ui/layout';

const Post = ({ post, data }) => {
	const hydratedContent = hydrate(post.content, {
		components: MDXComponent,
	});

	return (
		<Box alignSelf='flex-start'>
			<Head>
				<title>{data.title}</title>
			</Head>
			<VStack mb='12' align='flex-start'>
				<Text as='h1' fontSize='5xl' fontWeight='bold'>
					{data.title}
				</Text>
				<Text>{data.author}</Text>
				<Text ps='p' fontSize='sm'>
					{data.publishedAt}
				</Text>
			</VStack>
			<div>{hydratedContent}</div>
		</Box>
	);
};

export default Post;

export const getStaticPaths = () => {
	const fileNames = fs.readdirSync('posts');
	const paths = fileNames.map((fileName) => ({
		params: {
			slug: fileName.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { slug } = params;
	const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
	const mattered = matter(file);
	const mdxSource = await renderToString(mattered.content, {
		components: MDXComponent,
	});

	return {
		props: {
			data: mattered.data,
			post: {
				content: mdxSource,
			},
		},
	};
};
