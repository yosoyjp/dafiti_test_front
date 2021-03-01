import React from 'react';
import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import { ContainerHeart } from './DataProduct.styled';

const FavoriteIcon = ({ isFavorite, setFavorite }) => (
  <ContainerHeart isFavorite={isFavorite} onClick={() => setFavorite(!isFavorite)} className="center">
    <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeart} />
  </ContainerHeart>
);

FavoriteIcon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default FavoriteIcon;
