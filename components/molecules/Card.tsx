import { IArticle } from "@store/slices/section/types";
import styled from "@emotion/styled";
import Paragraph from "@components/atoms/Paragraph";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  min-height: 100px;
  padding: 1rem;
  box-sizing: border-box;
`;

const SubjectArea = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 0.5rem;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & div.avatar-blur {
    width: 24px;
    height: 24px;
    flex-basis: 24px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #777777;
  }

  & div.image-box {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

const DescriptionArea = styled.div`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

interface Props {
  article: IArticle;
}

const Card = ({ article }: Props) => {
  return (
    <Container>
      <SubjectArea>
        <div className={"avatar-blur"} />
        <Paragraph>{article.title}</Paragraph>
      </SubjectArea>
      <DescriptionArea>
        <Paragraph desc>{article.body}</Paragraph>
      </DescriptionArea>
    </Container>
  );
};

export default Card;
