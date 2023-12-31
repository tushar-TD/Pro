// CardFeatures component

import React from 'react';
import { Link } from 'react-router-dom';
import { addCartItem } from '../redux/productSlide';
import { useDispatch } from 'react-redux';

const CardFeatures = ({ id, image, name, price, category, loading }) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    //e.stopPropagation();
    dispatch(addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,




      image: image
    }));

  };

  return (
    <div className='w-full min-w-[240px] max-w-[200px] bg-white hover:shadow-lg cursor-pointer drop-shadow-md py-5 overflow-hidden'>
      {image ? (
        <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className='h-40 justify-center flex-col'>
            <img src={image} className='w-full h-full object-cover' alt='Product' />
          </div>
          <div className='py-3 pb-5'>
            <h3 className='font-semibold text-violet-500 text-lg capitalize text-center mt-4 whitespace-nowrap overflow-hidden'>
              {name}
            </h3>
            <p className='text-center text-violet-600 font-medium'>{category}</p>
            <p className='font-semibold text-lg capitalize text-center'>{price} ₹</p>
          </div>
        </Link>
      ) : (
        <p>{loading}</p>
      )}

      <div className='text-center'>
        <button className='bg-yellow-400 rounded-md py-2 px-5 my-1 mx-auto hover:bg-yellow-500' onClick={handleAddCartProduct}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardFeatures;
