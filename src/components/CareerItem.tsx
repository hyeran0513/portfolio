import styled from "styled-components";
import { motion } from "framer-motion";

interface careerItemProps {
  item: {
    company: string;
    date: string;
    type: string;
  };
  index: number;
}

const careerItem = ({ item, index }: careerItemProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.3,
      }}
    >
      <Type>{item.type}</Type>
      <Company>{item.company}</Company>
      <Date>{item.date}</Date>
    </Card>
  );
};

const Card = styled(motion.li)`
  padding: 30px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
`;

const Type = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Company = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Date = styled.div`
  color: ${({ theme }) => theme.text};
`;

export default careerItem;
