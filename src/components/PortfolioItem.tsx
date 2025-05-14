import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import SkillCategory from "./SkillCategory";

const colors = ["#E4E9FF", "#E6E3F6", "#F2E3F6"];

interface Skill {
  id: string | number;
  text: string;
  icon: string;
}

interface PortfolioItemProps {
  item: {
    title: string;
    thumb: string;
    type: string;
    date: string;
    description: string;
    skills: Skill[];
    feature: string[];
    contribution: number;
    role: string[];
    preview: string[];
    insights: string;
    projectType: string;
  };
  index: number;
}

const PortfolioItem = ({ item, index }: PortfolioItemProps) => {
  const [open, setOpen] = useState(false);

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
        <CardLink onClick={() => setOpen(true)}>
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
        </CardLink>
      </Card>

      {/* 모달 */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title={item?.title}>
        <ModalBody>
          <Thumb>
            <img src={item?.thumb} alt="" />
          </Thumb>

          <ModalDetails>
            <Tab>
              <TabItem>{item?.type}</TabItem>
              <TabItem>{item?.projectType}</TabItem>
              <TabItem>{item?.date}</TabItem>
            </Tab>

            <ListWrapper>
              <ListBox>
                <ListTitle>설명</ListTitle>

                <List>
                  <ListItem>{item?.description}</ListItem>
                </List>
              </ListBox>

              <ListBox>
                <ListTitle>스택</ListTitle>

                <SkillCategory data={item?.skills} />
              </ListBox>

              <ListBox>
                <ListTitle>주요 기능</ListTitle>

                <List>
                  {item?.feature?.map((feature) => (
                    <ListItem>{feature}</ListItem>
                  ))}
                </List>
              </ListBox>

              <ListBox>
                <ListTitle>기여도: {item?.contribution}%</ListTitle>

                <List>
                  {item?.role?.map((role) => (
                    <ListItem>{role}</ListItem>
                  ))}
                </List>
              </ListBox>

              <ListBox>
                <ListTitle>깃허브 및 시연 영상 링크</ListTitle>

                <List>
                  {item?.preview?.map((preview) => (
                    <ListItem>
                      <ListLink to={preview}>{preview}</ListLink>
                    </ListItem>
                  ))}
                </List>
              </ListBox>

              <ListBox>
                <ListTitle>느낀 점 및 배운 점</ListTitle>

                <List>
                  <ListItem>{item?.insights}</ListItem>
                </List>
              </ListBox>
            </ListWrapper>
          </ModalDetails>
        </ModalBody>
      </Modal>
    </>
  );
};

const Card = styled(motion.li)``;

const CardLink = styled.button`
  display: flex;
  width: 100%;
  height: 284px;
  border-radius: 28px;
  transition: all ease 0.4s;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-align: left;

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
  flex: 1;
  height: 140px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 10px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 40%;
  background-color: ${({ theme }) => theme.gray};
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
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

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ModalDetails = styled.div``;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListBox = styled.div``;

const ListTitle = styled.div`
  margin-bottom: 20px;
  padding: 20px 0;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li`
  line-height: 1.3;
  word-break: keep-all;
  white-space: pre-line;
  color: ${({ theme }) => theme.text};
`;

const ListLink = styled(Link)``;

const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
`;

const TabItem = styled.div`
  padding: 8px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.tabText};
  background-color: ${({ theme }) => theme.tabBg};
  border-radius: 4px;
`;

export default PortfolioItem;
