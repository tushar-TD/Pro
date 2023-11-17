import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProduct from '../Components/AllProduct';
import { addCartItem } from '../redux/productSlide';
const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.find((el) => el._id === filterby);
  const dispatch = useDispatch()
  const handleAddCartProduct = (e) => {
    //e.stopPropagation();
    dispatch(addCartItem(productDisplay));

  };

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

      </div>
      <AllProduct heading={"realated Product"} />
    </div>
  );
};

export default Menu;
