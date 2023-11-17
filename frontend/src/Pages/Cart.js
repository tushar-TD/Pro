import React from 'react';
import { useSelector } from 'react-redux';
import cartItems from '../Components/CardFeatures'; // Import your CartItem component (you need to create this component)
import CartProduct from '../Components/CartProduct';

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItems);

  return (
    <div className='p-2 md:p-4 rounded border-2 border-violet-600'>
      <h2 className='text-lg md:text-2xl text-violet-600'>Your Cart Items</h2>

      <div className='flex flex-col gap-4 my-3'>
        <div className='w-full max-w-3xl'>
          {
            productCartItem.map(el => {
              return (
                <CartProduct key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
