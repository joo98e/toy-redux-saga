import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import uuid from "react-uuid";
import { createSectionRequest } from "@store/slices/section/slice";
import { useForm } from "react-hook-form";
import Button from "@components/atoms/Button";
import Section from "@components/molecules/Section";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

const SectionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: auto;
`;

interface IForm {
  title: string;
}

interface Props {}

const SectionTemplate = ({}: Props) => {
  const dispatch = useDispatch();
  const sectionState = useSelector((state: RootState) => state.section);
  const { register, watch, reset } = useForm<IForm>();

  function handleClickAddSection() {
    if (!watch("title")) return;
    const request = {
      uuid: uuid(),
      title: watch("title"),
    };
    try {
      dispatch(createSectionRequest(request));
      reset({
        title: "",
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Container>
      <SectionButtonWrapper>
        <input type={"text"} {...register("title", { required: true })} />
        <Button disabled={sectionState.sections.length === 3} buttonType={"primary"} onClick={handleClickAddSection}>
          add section
        </Button>
      </SectionButtonWrapper>
      <SectionWrapper>
        {sectionState.sections.map((section, index) => {
          return <Section key={index} section={section} />;
        })}
      </SectionWrapper>
    </Container>
  );
};

export default SectionTemplate;
