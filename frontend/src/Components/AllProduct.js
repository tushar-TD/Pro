import React, { useEffect, useState } from 'react';
import FilterProduct from './FilterProduct';
import CardFeatures from './CardFeatures';
import { useSelector } from 'react-redux';

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter((el) => el.category.toLowerCase() === category.toLowerCase());
    setDataFilter([...filter]);
  };

  return (
    <div>
      <div className='mt-5 mb-5' />
      <h2 className='font-bold text-2xl text-violet-600 mb-2'>
        {heading}
      </h2>

      <div className='flex gap-4 justify-center overflow-scroll'>
        {categoryList[0] &&
          categoryList.map((el) => (
            <FilterProduct
              key={el}
              category={el}
              onClick={() => handleFilterProduct(el)}
            />
          ))}
      </div>

      <div className='flex flex-wrap justify-center my-4 gap-3'>
        {dataFilter.map((el) => (
          <CardFeatures
            key={el._id}
            id={el._id}
            image={el.image}
            name={el.name}
            category={el.category}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
