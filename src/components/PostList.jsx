import { Box, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import NextLink from 'next/link';
import TagGenerator from '../components/TagGenerator';

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
							<Link _hover={{ textDecoration: 'none' }}>
								<Text
									as='h2'
									fontSize={['2xl', '3xl']}
									fontWeight='700'
									mb='2'
									lineHeight='1.7rem'
								>
									{post.title}
								</Text>
							</Link>
						</NextLink>
						<HStack>
							<Text fontSize='sm' fontWeight='500' color='gray' mb='1'>
								{post.publishedAt} ·
							</Text>
							<Box pb='1'>
								<TagGenerator tags={post.tags} />
							</Box>
						</HStack>
						<Text>{post.summary}</Text>
					</Box>
					{/* TODO: Tag Genarator */}
				</Box>
			))}
		</VStack>
	);
};

export default PostList;
