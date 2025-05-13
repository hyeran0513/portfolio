import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const colors = ["#E4E9FF", "#E6E3F6", "#F2E3F6"];

interface PortfolioItemProps {
  item: {
    title: string;
    thumb: string;
    type: string;
  };
  index: number;
}

const PortfolioItem = ({ item, index }: PortfolioItemProps) => {
  return (
    <>
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: index * 0.3,
        }}
      >
        <ThumbWrapper color={colors[index % colors.length]}>
          <Thumb>
            <img src={item?.thumb} alt="" />
          </Thumb>
        </ThumbWrapper>

        <Info>
          <InfoTitle>{item?.title}</InfoTitle>
          <InfoSubTitle>{item?.type}</InfoSubTitle>

          <MoreButton>
            자세히 보기 <FaArrowAltCircleRight />
          </MoreButton>
        </Info>
      </Card>
    </>
  );
};

const Card = styled(motion.li)`
  display: flex;
  height: 284px;
  border-radius: 28px;
  transition: all ease 0.4s;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 32px 0 rgba(32, 59, 101, 0.15);
  }
`;

const ThumbWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 60%;
  background-color: ${({ color }) => color};
`;

const Thumb = styled.div`
  height: 140px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 10px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 40%;
  background-color: ${({ theme }) => theme.gray};
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  line-height: 1.3;
  font-size: 20px;
  font-weight: 500;
  word-break: keep-all;
`;

const InfoSubTitle = styled.div`
  font-size: 15px;
  color: #959595;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
  gap: 6px;
  color: ${({ theme }) => theme.brown};
  font-weight: bold;
  cursor: pointer;

  svg {
    font-size: 16px;
  }
`;

export default PortfolioItem;
