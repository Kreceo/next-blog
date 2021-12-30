import styled from 'styled-components';

export const PrimaryBtn = styled.button`
    border-radius: 15px;
    background: var(--melon);
    color: var(--white);
    border: none;
    padding: 10px 30px 10px 30px;
    cursor: pointer;
`;

export const SecondaryBtn = styled.button`
    border-radius: 15px;
    background: var(--melon);
    color: var(--white);
    border: none;
    padding: 10px 30px 10px 30px;
    cursor: pointer;
`;

export const BlogCard = styled.div`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 .5rem 1rem var(--mistyRose);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const BlogCardHeader = styled.div`
  img {
    border-radius: 100%;
    border: 5px solid #D8E2DC !important;
  }
`;

export const BlogCardBody = styled.div`
  p {
      font-size: 14px;
  }
`;

export const FlexRowContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;