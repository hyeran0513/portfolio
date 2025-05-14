import SkillList from "./SkillList";
import styled from "styled-components";

interface Skill {
  id: string | number;
  text: string;
  icon: string;
}

interface SkillCategoryProps {
  title?: string;
  data: Skill[];
}

const SkillCategory = ({ title, data }: SkillCategoryProps) => {
  return (
    <SkillBox>
      {title && <SkillTitle>{title}</SkillTitle>}

      <SkillList data={data} />
    </SkillBox>
  );
};
const SkillBox = styled.div``;

const SkillTitle = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
`;

export default SkillCategory;
