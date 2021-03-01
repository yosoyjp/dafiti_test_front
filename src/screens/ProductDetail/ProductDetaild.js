import React from 'react';

import Talle from '../../components/Talle/Talle';
import { data } from '../../__mocks__/detail.json';
import Layout from '../../components/Layout/Layout';
import SocialBar from '../../components/SocialBar/SocialBar';
import Collapsible from '../../components/Collapsible/Collapsible';
import DataProduct from '../../components/DataProduct/DataProduct';
import ProductImage from '../../components/ProductImage/ProductImage';

const ProductDetaild = () => (
  <Layout>
    <ProductImage urlImage={data.image} />
    <DataProduct brand={data.brand} name={data.name} summary={data.summary} />
    <Talle talleList={data.waist} />
    <SocialBar socialData={data.socials} />
    {data.texts.map((section) => (
      <Collapsible key={`texts-section-${section.name}`} title={section.name} content={section.html} />
    ))}
  </Layout>
);

export default ProductDetaild;
