import fs from 'fs';
import Head from 'next/head';
import path from 'path';
import MDX from '@mdx-js/runtime';
import matter, { GrayMatterFile } from 'gray-matter';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import MDXComponents from '../../src/components/MDXComponent';
import TagGenerator from '../../src/components/TagGenerator';
import { Fade } from '@chakra-ui/transition';

interface Props extends GrayMatterFile<string> {}

function Post({ data, content }: Props) {
	return (
		<Fade in={true}>
			<Box alignSelf='flex-start'>
				<Head>
					<title>{data.title} • 김노르웨이의 블로그</title>
					<meta name='description' content={data.summary} />
				</Head>
				<VStack mb='12' align='flex-start'>
					<Text as='h1' fontSize='4xl' fontWeight='bold'>
						{data.title}
					</Text>
					<HStack mb='5' spacing='0'>
						<Text ps='p' fontSize='sm' color='gray' fontWeight='500'>
							{data.publishedAt} ·
						</Text>
						<Box pl='4px'>
							<TagGenerator tags={data.tags} />
						</Box>
					</HStack>
					<MDXProvider components={MDXComponents}>
						<MDX>{content}</MDX>
					</MDXProvider>
				</VStack>
			</Box>
		</Fade>
	);
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
	const fileNames = fs.readdirSync('posts');
	const paths = fileNames.map((fileName) => ({
		params: { slug: fileName.replace('.md', '') },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params;
	const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
	const { data, content } = matter(file);

	return {
		props: {
			data,
			content,
		},
	};
};
