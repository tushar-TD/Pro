import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../Components/HomeCard';

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  const homeProductCartList = productData.slice(0, 4);

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 py-5'>
          <div className='flex gap-3 bg-violet-300 w-28 px-2 items-center rounded-md '>
            <p className='text-sm font-medium'>Bike Delivery</p>
            <img src='https://cdn4.iconfinder.com/data/icons/logistic-delivery-solid-icons-vol-3/72/101-1024.png' className='h-7' alt='Bike Delivery Icon' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-4'>Groceries delivered in 10 minutes <br /><span className='text-violet-800 text-xl'> At your Home</span></h2>
          <p className='py-4 px-7 text-base  rounded-md'>The best and fastest online grocery store in India. Zepto is an online supermarket for all your daily needs. Online shopping now made easy with a wide range of groceries and home needs.</p>
          <br />
          <button className='font-bold bg-violet-300 px-4 py-2 rounded-md' >Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {homeProductCartList[0] &&
            homeProductCartList.map((el) => (
              <HomeCard
                // Make sure to include a unique key
                image={el.image}
                name={el.name}
                price={el.price}
              />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
