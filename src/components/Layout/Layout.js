import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import { Container, ContainerChildren } from './Layout.styled';

const Layout = ({ children }) => (
  <Container>
    <Header />
    <ContainerChildren>
      {children}
    </ContainerChildren>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
