import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setArticleRequest } from "@store/slices/section/slice";
import uuid from "react-uuid";
import NewCard from "@components/test/NewCard";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

const Container = styled.div``;

const Home: NextPage = () => {
  // const aaa = useSelector((state:RootState) => state.se);
  const dispatch = useDispatch();

  function handleClickGetData(): void {
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
