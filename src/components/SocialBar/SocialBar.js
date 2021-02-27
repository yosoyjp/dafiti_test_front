import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Container } from './SocialBar.styled';

const SocialBar = () => (
  <Container className="horizontal-around">
    <FontAwesomeIcon icon={faFacebookF} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faWhatsapp} />
  </Container>
);

export default SocialBar;
