import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioItemProps {
  item: {
    title: string;
    thumb: string;
    type: string;
  };
  index: number;
}

const PortfolioItem = ({ item, index }: PortfolioItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.3,
        }}
        onClick={handleOpenModal}
        style={{ cursor: "pointer" }}
      >
        <Card layoutId={`modal-${index}`}>
          <Thumb>
            <img src={item?.thumb} alt="" />
          </Thumb>
          <Info>
            <InfoTitle>{item?.title}</InfoTitle>
            <InfoSubTitle>{item?.type}</InfoSubTitle>
          </Info>
        </Card>
      </motion.li>

      {isOpen && (
        <Overlay onClick={handleCloseModal}>
          <motion.div
            layoutId={`modal-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ModalContent>
              <img src={item.thumb} alt="" />
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </ModalContent>
          </motion.div>
        </Overlay>
      )}
    </>
  );
};

const Card = styled(motion.div)`
  display: block;
  border-radius: 25px;
  box-shadow: 0px 0px 30px #0000001a;
  transition: all ease 0.6s;
  overflow: hidden;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: translateY(-45px);
    box-shadow: 0px 0px 50px #00000033;
  }
`;

const Thumb = styled.div`
  height: 372px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 20px 28px 18px 25px;
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const InfoSubTitle = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.secondary};
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 25px;
  max-width: 600px;
  width: 100%;
  z-index: 1001;

  img {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 20px;
  }

  h3 {
    margin: 0 0 10px;
  }
`;

export default PortfolioItem;
