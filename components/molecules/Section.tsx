import styled from "@emotion/styled";
import { ISection } from "@store/slices/section/types";
import Title from "@components/atoms/Title";
import Button from "@components/atoms/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { getArticleRequest } from "@store/slices/section/slice";

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
  const dispatch = useDispatch();

  function handleClickLoadData() {
    try {
      dispatch(
        getArticleRequest({
          uuid: section.uuid,
        })
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Title>{section.title}</Title>
      <Button buttonType={"primary"} onClick={handleClickLoadData}>
        load data
      </Button>
    </Container>
  );
};

export default React.memo(Section, (prevProps, nextProps) => prevProps.section.uuid === nextProps.section.uuid);
