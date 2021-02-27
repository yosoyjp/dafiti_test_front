import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './ProductImage.styled';

const ProductImage = ({ urlImage }) => (
  <Container>
    <Image src={urlImage} />
  </Container>
);

ProductImage.propTypes = {
  urlImage: PropTypes.string.isRequired,
};

export default ProductImage;
