import { Box, Flex, HStack, Img, Link, Text, VStack } from '@chakra-ui/react';

// 내일 다른 프로젝트 참고해서 a 링크. 큰일났네 다 까먹었어
// 그냥 링크만 걸 거 같긴 하지만

const ProjectList = () => {
	return (
		<VStack spacing='5' w='100%' minWidth={['0', '0', '700px']}>
			{/* Typestagram */}
			<Flex
				border='1px solid black'
				borderColor='whiteAlpha.300'
				w='100%'
				flexDir={['column', 'row']}
			>
				<Box
					maxW='170px'
					w='100%'
					height='150px'
					backgroundImage='url("thumnail_typestagram.png")'
					backgroundPosition='center'
					backgroundSize='cover'
					display={['none', 'block']}
				></Box>
				<Box
					w='100%'
					alignItems='flex-start'
					justifyContent='flex-end'
					px='1.25rem'
					py='2'
				>
					<Text fontSize='2xl' fontWeight='bold'>
						Typestagram
					</Text>
					<Text fontSize='14px' mb='0.5rem'>
						인스타그램과 비슷한, 익숙한 형태의 CRUD 어플리케이션을 새로
						시도하는 스택으로 만든 프로젝트입니다.
					</Text>
					<Text fontSize='14px' fontWeight='bold'>
						Repository:{' '}
						<Link
							href='https://github.com/Knorway/typestagram'
							color='blue.400'
							target='_blank'
						>
							https://github.com/Knorway/typestagram
						</Link>
					</Text>
					<Text fontSize='14px' fontWeight='bold'>
						Project:{' '}
						<Link
							href='https://typestagram.site/'
							color='blue.400'
							target='_blank'
						>
							https://typestagram.site
						</Link>
					</Text>
				</Box>
			</Flex>
			{/* Root-admin */}
			<Flex border='1px solid black' borderColor='whiteAlpha.300' w='100%'>
				<Box
					maxW='170px'
					w='100%'
					height='150px'
					backgroundImage='url("thumnail_root.png")'
					backgroundPosition='center'
					backgroundSize='cover'
					display={['none', 'block']}
				></Box>
				<Box
					w='100%'
					alignItems='flex-start'
					justifyContent='flex-end'
					px='1.25rem'
					py='2'
				>
					<Text fontSize='2xl' fontWeight='bold'>
						root-camera-admin
					</Text>
					<Text fontSize='14px' mb='0.5rem'>
						온라인 카메라 샵의 재고관리를 위해 만들어진 관리자 페이지
						프로젝트입니다.
					</Text>
					<Text fontSize='14px' fontWeight='bold'>
						Repository:{' '}
						<Link
							href='https://github.com/Knorway/root-camera-admin'
							color='blue.400'
							target='_blank'
						>
							https://github.com/Knorway/root-camera-admin
						</Link>
					</Text>
					<Text fontSize='14px' fontWeight='bold'>
						Project:{' '}
						<Link
							href='https://root-admin.herokuapp.com/'
							color='blue.400'
							target='_blank'
						>
							https://root-admin.herokuapp.com
						</Link>
					</Text>
				</Box>
			</Flex>
		</VStack>
	);
};

export default ProjectList;
