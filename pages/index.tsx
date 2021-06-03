import Head from 'next/head';
import { GetStaticProps } from 'next';
import { VStack } from '@chakra-ui/layout';
import PostList from '../src/components/PostList';
import { getAllPosts } from '../src/lib/markdown';

interface Props {
	postList: string[];
}

function App({ postList }: Props) {
	return (
		<VStack>
			<Head>
				<title>김노르웨이의 블로그</title>
				{/* <title>knorway.github.io</title> */}
			</Head>
			<PostList postList={postList} />
		</VStack>
	);
}

export default App;

export const getStaticProps: GetStaticProps = async () => {
	const postList = getAllPosts();

	return {
		props: { postList },
	};
};
