import { Link } from '@chakra-ui/layout';
import fs from 'fs';
import NextLink from 'next/link';

export default function App({ slugs }) {
	return (
		<>
			{slugs.map((slug) => (
				<NextLink key={slug} href={`/posts/${slug}`}>
					<Link>{slug}</Link>
				</NextLink>
			))}
			{/* TODO: <PostLayout /> */}
		</>
	);
}

export const getStaticProps = () => {
	const slugs = fs.readdirSync('posts').map((slug) => slug.replace('.md', ''));

	return {
		props: { slugs },
	};
};
