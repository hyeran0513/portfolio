import { motion } from "framer-motion";
import type { ReactNode } from "react";
import styled from "styled-components";

interface SectionTitleProps {
  egTitle: string;
  koTitle: string;
  children?: ReactNode;
}

const SectionTitle = ({ egTitle, koTitle, children }: SectionTitleProps) => {
  return (
    <TitleWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
      }}
    >
      <Title>
        <span>{egTitle}</span>
        {koTitle}
      </Title>

      <Description>{children}</Description>
    </TitleWrapper>
  );
};

const TitleWrapper = styled(motion.div)`
  margin-bottom: 64px;
`;

const Title = styled.h3`
  line-height: 1.45;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.text};

  span {
    display: block;
    margin-bottom: 8px;
    line-height: 1.21;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
  }
`;

const Description = styled.p`
  color: #5d6169;
  margin-top: 20px;
  line-height: 1.6;
  font-size: 20px;
  white-space: pre-line;
  word-wrap: break-word;
`;

export default SectionTitle;
