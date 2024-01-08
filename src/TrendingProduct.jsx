// TrendingProducts.js
import { useContext } from 'react';
import { dataContext } from './Productdata';

// Assuming productData is an array of objects with a 'trending' property
const useTrendingProducts = () => {
  const { productData } = useContext(dataContext);
  return productData.filter((cur) => cur.trending);
};

export default useTrendingProducts;
