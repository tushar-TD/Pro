import React from 'react';
import { GiForkKnifeSpoon } from 'react-icons/gi';

const FilterProduct = ({ category, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>
        <div className='cursor-pointer text-3xl p-3 bg-yellow-400 rounded'><GiForkKnifeSpoon /></div>
      </div>
      <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  );
};

export default FilterProduct;
