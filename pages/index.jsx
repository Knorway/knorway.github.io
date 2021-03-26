import { VStack } from '@chakra-ui/layout';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import PostList from '../src/components/PostList';

export default function App({ postList }) {
	return (
		<VStack>
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
