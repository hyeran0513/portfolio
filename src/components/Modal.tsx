import { useEffect, type ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import useModalPortal from "../hooks/useModalPortal";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const modalRoot = useModalPortal();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalBox
            as={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHead>
              <Title>{title}</Title>
              <CloseButton onClick={onClose}>
                <BiX />
              </CloseButton>
            </ModalHead>

            <ModalBody>{children}</ModalBody>
          </ModalBox>
        </Overlay>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 12px;
  min-width: 300px;
  max-width: 700px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalHead = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const ModalBody = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const CloseButton = styled.button`
  margin-left: auto;

  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

export default Modal;
