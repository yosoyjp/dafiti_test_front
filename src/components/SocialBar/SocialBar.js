import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Container, Link } from './SocialBar.styled';

const SocialBar = ({ socialData }) => (
  <Container className="horizontal-around">
    <Link href={socialData.facebook} target="_blank">
      <FontAwesomeIcon icon={faFacebookF} />
    </Link>
    <Link href={socialData.twitter} target="_blank">
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
    <Link href={socialData.whatsapp} target="_blank">
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  </Container>
);

SocialBar.propTypes = {
  socialData: PropTypes.shape({
    facebook: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialBar;
