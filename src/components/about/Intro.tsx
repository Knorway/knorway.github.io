import { Box, VStack } from '@chakra-ui/react';
import TagGenerator from '../TagGenerator';

const set = 'HTML, CSS, Javascript, React, Node, Express';

const Intro = () => {
	return (
		<Box fontSize='16px' fontWeight='500'>
			<VStack alignItems='flex-start' spacing='1'>
				<div>
					Frontend 개발자가 되기 위해 노력하는, Node 생태계 전반에 관심이 있는
					개발자 김태형입니다.
				</div>
				<div>
					내가 만들어 낸 것이 소비되는 것에 가장 큰 열정과 가치를 느낍니다.
				</div>
				<div>
					현재 타입스크립트와 Next.js를 학습 중에 있으며 웹 전반에 대한 이해를
					위해 노력하고 있습니다.
				</div>
				{/* <div>목표는 매일 성장하는 것입니다.</div> */}
				<div>목표는 매일 더 호기심을 가지며 성장하는 것입니다.</div>
				<div>
					이 과정에서 공동의 목표 아래 기여하며 함께 나아갈 수 있다면 더할 나위
					없을 것입니다.
				</div>
				<Box alignSelf='center' pt='1rem'>
					<TagGenerator tags={set} />
				</Box>
			</VStack>
		</Box>
	);
};

export default Intro;
