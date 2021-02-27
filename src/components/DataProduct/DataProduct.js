import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Container, ContainerData, Title, Summary, Brand,
} from './DataProduct.styled';
import FavoriteIcon from './FavoriteIcon';

const DataProduct = ({ name, summary, brand }) => {
  const [isFavorite, setFavorite] = useState(false);

  return (
    <Container className="horizontal-start">
      <ContainerData>
        <Title>
          {name}
        </Title>
        <Summary>
          {summary}
        </Summary>
        <Brand>
          Vendido y entregado:
          <span>{brand}</span>
        </Brand>
      </ContainerData>
      <FavoriteIcon isFavorite={isFavorite} setFavorite={setFavorite} />
    </Container>
  );
};

DataProduct.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default DataProduct;
