import React, { useState, useEffect } from 'react';
import { Product, HeroBanner } from '@/components';
import { client } from '../lib/client';
import banner from '@/sanity_my-app/schemas/banner';

const Home = ({ products, bannerData }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  // Filtrar produtos com base na região selecionada
  const filteredProducts = selectedRegion
    ? products.filter((product) => product.region === selectedRegion)
    : products;

  return (
    <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <div className="filter-container">
        <select
          className="region-select"
          value={selectedRegion}
          onChange={handleRegionChange}
          placeholder='Escolha a região'
        >
          <option value="">Todas as Regiões</option>
          {Array.from(new Set(products.map((product) => product.region))).map(
            (region) => (
              <option key={region} value={region}>
                {region}
              </option>
            )
          )}
        </select>
      </div>
      <div className="products-heading">
        <h2>Melhores lugares para conhecer</h2>
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home;