import React from 'react';

import Talle from '../../components/Talle/Talle';
import Layout from '../../components/Layout/Layout';
import SocialBar from '../../components/SocialBar/SocialBar';
import DataProduct from '../../components/DataProduct/DataProduct';
import ProductImage from '../../components/ProductImage/ProductImage';

const ProductDetaild = () => (
  <Layout>
    <ProductImage urlImage="https://media.kohlsimg.com/is/image/kohls/4587279_Black_White?wid=300&hei=300&op_sharpen=1" />
    <DataProduct brand="Nike" name="Los jordan" summary="Mis zapatos bien chulos" />
    <Talle talleList={[
      {
        value: '32',
        available: true,
      },
      {
        value: '34',
        available: true,
      },
      {
        value: '36',
        available: true,
      },
      {
        value: '38',
        available: false,
      },
      {
        value: '40',
        available: true,
      },
      {
        value: '41',
        available: true,
      },
      {
        value: '42',
        available: true,
      },
      {
        value: '43',
        available: true,
      },
    ]}
    />
    <SocialBar />
  </Layout>
);

export default ProductDetaild;
