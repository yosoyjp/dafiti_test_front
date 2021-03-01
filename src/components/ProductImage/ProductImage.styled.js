import styled from 'styled-components';

const height = '40vh';

export const Container = styled.div`
  width: 100%;
  height: ${height};
`;

export const Image = styled.img`
  width: 100%;
  max-height: ${height};
  object-fit: contain;
`;
