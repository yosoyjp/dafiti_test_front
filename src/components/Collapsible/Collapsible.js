import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import {
  Container, TopBar, Title, ContentInfo,
} from './Collapsible.styled';

const Collapsible = ({ title, content }) => {
  const [open, toogleOpen] = useState(false);

  return (
    <Container>
      <TopBar className="horizontal-between" onClick={() => toogleOpen(!open)}>
        <Title>{title}</Title>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
      </TopBar>
      <ContentInfo isOpen={open} dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapsible;
