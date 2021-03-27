import { VStack } from '@chakra-ui/layout';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import PostList from '../src/components/PostList';
import Head from 'next/head';

export default function App({ postList }) {
	return (
		<VStack>
			<Head>
				<title>blog | knorway.github.io</title>
			</Head>
			<PostList postList={postList} />
		</VStack>
	);
}

export const getStaticProps = async () => {
	const slugs = fs.readdirSync('posts').map((dir) => dir.replace('.md', ''));
	const postList = slugs.map((slug) => {
		const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
		const mattered = matter(file);
		return {
			...mattered.data,
			slug,
		};
	});

	return {
		props: { postList },
	};
};
