import styled from "@emotion/styled";
import { ISection } from "@store/slices/section/types";
import Title from "@components/atoms/Title";
import Button from "@components/atoms/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { getArticleRequest } from "@store/slices/section/slice";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Card from "@components/molecules/Card";

const Container = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 0.4rem;
  padding: 1rem;
  box-sizing: border-box;
  background: #fff;

  animation: transform-container 0.5s;
  transition: all 0.5s ease-in-out;

  @media (max-width: 512px) {
    width: 500px;
    height: 200px;
    transition: all 0.5s ease-in-out;
  }

  div.flex-box {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
  }

  div.scroll-box {
    height: calc(100% - 50px);
    overflow-y: auto;
  }

  & * {
    animation: fade-child-nodes 1.5s;
  }

  @keyframes transform-container {
    0% {
      width: 0;
    }
    100% {
      width: 400px;
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
      <div className={"flex-box"}>
        <Title>{section.title}</Title>
        <Button buttonType={"primary"} onClick={handleClickLoadData}>
          load data
        </Button>
      </div>
      <DragDropContext onDragEnd={() => {}}>
        <div className={"scroll-box"}>
          <Droppable droppableId={section.uuid}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {section.articles.map((article, index) => {
                  return <Card index={index} article={article} />;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </Container>
  );
};

export default React.memo(Section, (prevProps, nextProps) => {
  if (prevProps.section.uuid === nextProps.section.uuid || prevProps.section.articles === nextProps.section.articles)
    return false;
});
