import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Text>© {currentYear} hyeran. All rights reserved.</Text>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 20px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text || "#888"};
`;

export default Footer;
