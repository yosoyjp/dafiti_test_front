import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import LogoDafiti from '../../assets/dafiti-logo.png';
import { Container, Logo, Column } from './Header.styled';

const Header = () => (
  <Container className="horizontal-between">
    <Column className="horizontal-start">
      <FontAwesomeIcon icon={faBars} />
      <Logo className="horizontal-around">
        <img src={LogoDafiti} alt="Dafiti" />
      </Logo>
    </Column>
    <Column className="horizontal-end">
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faShoppingCart} />
    </Column>
  </Container>
);

export default Header;
