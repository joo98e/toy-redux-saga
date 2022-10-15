import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import SectionTemplate from "@components/templates/SectionTemplate";

const SectionHome: NextPage = () => {
  return <SectionTemplate />;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default SectionHome;
