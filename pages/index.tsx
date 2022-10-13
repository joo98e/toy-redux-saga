import type { NextPage } from "next";
import styled from "@emotion/styled";

const Container = styled.div``;

const Home: NextPage = () => {
  return (
    <Container>
      <span>213</span>
    </Container>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
