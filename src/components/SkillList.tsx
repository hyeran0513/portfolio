import SkillItem from "./SkillItem";
import styled from "styled-components";

interface Skill {
  id: string | number;
  text: string;
  icon: string;
}

interface SkillListProps {
  data: Skill[];
}

const SkillList = ({ data }: SkillListProps) => {
  return (
    <SkillGroup>
      {data.map((item) => (
        <SkillItem item={item} key={item.id} />
      ))}
    </SkillGroup>
  );
};

const SkillGroup = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default SkillList;
