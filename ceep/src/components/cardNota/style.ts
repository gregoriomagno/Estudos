import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--fundo-detalhes);
  border-radius: 4px;
  flex-wrap: wrap;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  padding: 16px;
`;

export const Header = styled.header`
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H3 = styled.h3`
  font-size: 1.2em;
  margin-right: 12px;
`;
export const P = styled.p`
  margin-top: 8px;
  font-size: 1em;
`;
