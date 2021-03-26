import { Box, Link, Text, VStack } from '@chakra-ui/layout';
import NextLink from 'next/link';

const PostList = ({ postList }) => {
	return (
		<VStack as='main'>
			{postList.map((post) => (
				<Box
					as='article'
					key={post.title}
					w='100%'
					mb='8'
					borderLeft='4px'
					borderLeftColor='gray'
				>
					<Box marginLeft='5'>
						<NextLink href={`/posts/${post.slug}`}>
							<Link>
								<Text
									as='h2'
									fontSize='3xl'
									fontWeight='700'
									mb='2'
									lineHeight='1.7rem'
								>
									{post.title}
								</Text>
								<Text mb='2' fontSize='sm' fontWeight='500' color='gray'>
									{post.publishedAt} ·
								</Text>
							</Link>
						</NextLink>
						<Text>{post.summary}</Text>
					</Box>
					{/* TODO: Tag Genarator */}
				</Box>
			))}
		</VStack>
	);
};

export default PostList;
