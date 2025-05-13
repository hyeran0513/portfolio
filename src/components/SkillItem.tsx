import styled from "styled-components";

interface SkillItemProps {
  item: {
    text: string;
    icon: string;
  };
}

const SkillItem = ({ item }: SkillItemProps) => {
  return (
    <Skill>
      <SkillIcon>
        <img src={item.icon} alt="" />
      </SkillIcon>
      <SkillText>{item.text}</SkillText>
    </Skill>
  );
};

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SkillIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 2px;
  border-radius: 10px;
  box-shadow: -1px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.card};

  img {
    width: 100%;
    height: 100%;
  }
`;

const SkillText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
`;

export default SkillItem;
