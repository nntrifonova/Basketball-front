import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;
`;

export const HomeContent = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ListSection = styled.div`
  display: -moz-grid-line;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`