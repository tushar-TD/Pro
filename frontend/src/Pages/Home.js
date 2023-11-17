import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../Components/HomeCard';
import CardFeatures from '../Components/CardFeatures';
import { GrNext, GrPrevious } from 'react-icons/gr';
import FilterProduct from '../Components/FilterProduct';
import AllProduct from '../Components/AllProduct';

const Home = () => {
  const productData = useSelector((state) => state.product.productList);


  const homeProductCartList = productData.slice(0, 4);

  // All products having category vegetable
  const homeProductCartListVegetable = productData.filter((el) => el.category === 'Vegetable');


  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };





  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 py-5'>
          <div className='flex gap-3 bg-violet-300 w-28 px-2 items-center rounded-md '>
            <p className='text-sm font-medium'>Bike Delivery</p>
            <img src='https://cdn4.iconfinder.com/data/icons/logistic-delivery-solid-icons-vol-3/72/101-1024.png' className='h-7' alt='Bike Delivery Icon' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-4'>Groceries delivered in 10 minutes <br /><span className='text-violet-800 text-xl'> At your Home</span></h2>
          <p className='py-4 px-7 text-base rounded-md'>The best and fastest online grocery store in India. Zepto is an online supermarket for all your daily needs. Online shopping now made easy with a wide range of groceries and home needs.</p>
          <br />
          <button className='font-bold bg-violet-300 px-4 py-2 rounded-md'>Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {homeProductCartList.length > 0 ? (
            homeProductCartList.map((el) => (
              <HomeCard key={el._id} id={el._id} image={el.image} name={el.name} price={el.price} />
            ))
          ) : (
            loadingArray.map((_, index) => <HomeCard key={index + "loading"} loading='Loading...' />)
          )}
        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-violet-600 mb-2'>Vegetables</h2>
          <div className='ml-auto flex'>
            <button onClick={preveProduct} className='bg-yellow-400 hover:bg-yellow-100 rounded p-2 text-lg'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-yellow-400 hover:bg-yellow-100 rounded p-2 text-lg'><GrNext /></button>
          </div>
        </div>
        <div ref={slideProductRef} className='flex gap-5 overflow-scroll scroll-smooth scrollbar-none'>
          {homeProductCartListVegetable.length > 0 ? (
            homeProductCartListVegetable.map((el) => (
              <CardFeatures key={`Vegetable_${el._id}`} id={el._id} name={el.name} category={el.category} price={el.price} image={el.image} />

            ))
          ) : (
            loadingArrayFeature.map((el, index) => <CardFeatures key={index} loading='Loading...' key={index + "cartLoading"} />)
          )}
        </div>
      </div>

      <AllProduct heading={"Your Products"} />

    </div >
  );
};

export default Home;
