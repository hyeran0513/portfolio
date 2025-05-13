import styled from "styled-components";
import bgGradient from "../assets/images/bg/bg_gradient.png";
import { PiMouseSimpleThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Introduce = () => {
  return (
    <Container>
      <SlideInLeft
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FrontEnd>FRONTEND</FrontEnd>
      </SlideInLeft>

      <SlideInRight
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Developer>DEVELOPER</Developer>
      </SlideInRight>

      <TypewriterWrapper>
        <span>
          <Typewriter
            words={[
              "안녕하세요, 기술과 디자인의 경계를 잇는\n프론트엔드 개발자 김혜란입니다.",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </TypewriterWrapper>

      <ScrollWrapper>
        <MouseIcon
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PiMouseSimpleThin size={32} />
        </MouseIcon>

        <ScrollText
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll down
        </ScrollText>
      </ScrollWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 100px;
  height: 600px;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${bgGradient});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const SlideInLeft = styled(motion.div)``;
const SlideInRight = styled(motion.div)``;

const FrontEnd = styled.div`
  font-size: 100px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text};
`;

const Developer = styled.div`
  margin-top: -40px;
  font-size: 100px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 32px;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  color: transparent;
`;

const TypewriterWrapper = styled.div`
  line-height: 1.5;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
  white-space: pre-line;
  text-align: center;
`;

const ScrollWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
`;

const MouseIcon = styled(motion.div)`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.text};
`;

const ScrollText = styled(motion.span)`
  color: ${({ theme }) => theme.text};
`;

export default Introduce;
