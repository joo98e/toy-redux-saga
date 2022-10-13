import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import { test } from "@store/slices/section/saga";
import { useDispatch } from "react-redux";
import { setArticleRequest } from "@store/slices/section/slice";

const Container = styled.div``;

const Home: NextPage = () => {
  const dispatch = useDispatch();

  function handleClickGetData() {
    dispatch(setArticleRequest([]));
  }
  return (
    <Container>
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
