import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import SectionTemplate from "@components/templates/SectionTemplate";
import { resetServerContext } from "react-beautiful-dnd";

const SectionHome: NextPage = () => {
  return <SectionTemplate />;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  resetServerContext();

  return {
    props: {
      data: [],
    },
  };
};

export default SectionHome;
