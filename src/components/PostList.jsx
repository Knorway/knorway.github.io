import { Box, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import NextLink from 'next/link';
import TagGenerator from '../components/TagGenerator';

const PostList = ({ postList }) => {
	return (
		<VStack as='main'>
			{postList
				.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
				.map((post) => (
					<Box
						as='article'
						key={post.title}
						w='100%'
						mb='8'
						borderLeft='4px'
						borderLeftColor='gray'
					>
						<Box marginLeft='5' mt='-4px'>
							<NextLink href={`/posts/${post.slug}`}>
								<Link _hover={{ textDecoration: 'none' }}>
									<Text
										as='h2'
										fontSize={['2xl', '3xl']}
										fontWeight='700'
										mb='4px'
										lineHeight='35px'
									>
										{post.title}
									</Text>
								</Link>
							</NextLink>
							<HStack spacing='0'>
								<Text fontSize='sm' fontWeight='500' color='gray' mb='1'>
									{post.publishedAt} ·
								</Text>
								<Box pb='1' pl='4px'>
									<TagGenerator tags={post.tags} />
								</Box>
							</HStack>
							<Text>{post.summary}</Text>
						</Box>
					</Box>
				))}
		</VStack>
	);
};

export default PostList;
