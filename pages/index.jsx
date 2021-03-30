import { VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import PostList from '../src/components/PostList';
import { getAllPosts } from '../src/lib/markdown';

export default function App({ postList }) {
	return (
		<VStack>
			<Head>
				<title>knorway.github.io</title>
			</Head>
			<PostList postList={postList} />
		</VStack>
	);
}

export const getStaticProps = async () => {
	const postList = getAllPosts();

	return {
		props: { postList },
	};
};
