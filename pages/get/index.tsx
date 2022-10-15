import TestDraggable from "@components/organisms/TestDraggable";

interface Props {}

const index = ({}: Props) => {
  return (
    <div style={{ background: "#FFF" }}>
      <TestDraggable />
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log();
  return {
    props: {}, // will be passed to the page component as props
  };
}
