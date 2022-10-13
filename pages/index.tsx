import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setArticleRequest } from "@store/slices/section/slice";
import uuid from "react-uuid";

const Container = styled.div``;

const Home: NextPage = () => {
  const dispatch = useDispatch();

  function handleClickGetData() {
    dispatch(
      setArticleRequest([
        {
          userId: 1,
          id: uuid(),
          title: "123",
          body: "456",
        },
        {
          userId: 1,
          id: uuid(),
          title: "123",
          body: "456",
        },
      ])
    );
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
