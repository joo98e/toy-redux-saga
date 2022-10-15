import styled from "@emotion/styled";
import { ISection } from "@store/slices/section/types";
import Title from "@components/atoms/Title";

// animation: animation-name animation-duration animation-delay animation-iteration-count animation-timing-function animation-direction fill-mode play-state;
//
// * 이름 > 실행속도 > 지연시간 > 반복횟수 > 애니메이션 속도 조절/그래프 >  반복방향설정 > 끝난후위치 > 실행or정지

const Container = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 0.4rem;
  padding: 1rem;
  box-sizing: border-box;
  background: #fff;

  animation: transform-container 0.5s;
  transition: all 0.5s ease-in-out;

  & * {
    animation: fade-child-nodes 1.5s;
  }

  @keyframes transform-container {
    0% {
      width: 0;
    }
    100% {
      width: 300px;
    }
  }

  @keyframes fade-child-nodes {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface Props {
  section: ISection;
}

const Section = ({ section }: Props) => {
  return (
    <Container>
      <Title>{section.title}</Title>
      <button>데이터 로드하기</button>
    </Container>
  );
};

export default Section;
