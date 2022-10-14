import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { getArticleRequest } from "@store/slices/section/slice";
import NewCard from "@components/test/NewCard";

const Container = styled.div``;

const Home: NextPage = () => {
  const dispatch = useDispatch();

  function handleClickGetData(): void {
    dispatch(getArticleRequest());
  }

  return (
    <Container>
      <NewCard></NewCard>
      <button onClick={handleClickGetData}>213</button>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Home;
