import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProduct from '../Components/AllProduct';

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.find((el) => el._id === filterby);

  if (!productDisplay) {
    // Handle the case where productDisplay is undefined (product not found)
    return <div className='p-2 md:p-4'>Product not found</div>;
  }

  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl bg-white-300 m-auto md:flex items-center justify-center'>
        <div className='w-full max-w-sm p-5 md:w-1/2 max-h-72 shadow drop-shadow overflow-hidden mx-auto mb-4'>
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className='w-full h-full hover:scale-105 transition-all'
          />
        </div>
        <div className='md:w-1/2 md:ml-4'>
          <h3 className='font-semibold text-violet-500 text-xl md:text-2xl capitalize text-center mt-4 whitespace-nowrap overflow-hidden'>
            {productDisplay.name}
          </h3>
          <p className='text-center text-violet-600 font-medium mb-2'>{productDisplay.category}</p>
          <p className='font-semibold text-lg capitalize text-center mb-4'>{productDisplay.price} ₹</p>
          <div className='flex flex-col md:flex-row gap-3'>
            <button className="bg-yellow-400 rounded-md py-2 px-5 my-1 mx-auto md:mx-0 hover:bg-yellow-700">Buy Now</button>
            <button className="bg-yellow-400 rounded-md py-2 px-5 my-1 mx-auto md:mx-0 hover:bg-yellow-700">Add to cart</button>
          </div>
          <div className='mt-4'>
            <p className='text-violet-600 font-bold mb-2'>Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"realated Product"} />
    </div>
  );
};

export default Menu;
