import Section from "@components/molecules/Section";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import uuid from "react-uuid";
import { createSectionRequest } from "@store/slices/section/slice";
import { useForm } from "react-hook-form";
import Button from "@components/atoms/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SectionButtonWrapper = styled.div`
  width: 200px;
`;

interface IForm {
  title: string;
}

interface Props {}

const SectionTemplate = ({}: Props) => {
  const dispatch = useDispatch();
  const sectionState = useSelector((state: RootState) => state.section);
  const { register, watch } = useForm<IForm>();

  function handleClickAddSection() {
    const request = {
      uuid: uuid(),
      title: "123",
    };
    try {
      dispatch(createSectionRequest(request));
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Container>
      <SectionWrapper>
        {sectionState.sections.map((section) => {
          return <Section key={section.uuid} section={section} />;
        })}
      </SectionWrapper>
      <SectionButtonWrapper>
        <input type={"text"} {...register("title", { required: true })} />
        <Button disabled={sectionState.sections.length === 3} buttonType={"secondary"} onClick={handleClickAddSection}>
          add section
        </Button>
      </SectionButtonWrapper>
    </Container>
  );
};

export default SectionTemplate;
