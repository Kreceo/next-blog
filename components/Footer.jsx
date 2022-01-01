import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background: var(--melon);
  margin-top: 40px;
  padding: 20px 0px 20px 0px;

  p {
    color: var(--white);
    text-align: center;
    font-size: 14px;
  }  
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Copyright&copy; 2022 - Craft-Away</p>
    </FooterContainer>
  );
}
