import React from 'react';
import styled from 'styled-components';

import LogoDafiti from '../../assets/logo.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  width: 40vw;
  height: auto;
  object-fit: contain;
`;

const LoadingPage = () => (
  <Container className="center">
    <Image src={LogoDafiti} />
  </Container>
);

export default LoadingPage;
