import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai'; // Import from 'react-icons/ai' instead of 'react-icons/bs'
import { imagetoBase64 } from '../Utility/ImagetoBase64';

const NewProduct = () => {
  const uploadImage = async (e) => {
    console.log(e.files);
    const data = await imagetoBase64(e.target.files[0])
    console.log(data)
  };

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md drop-shadow flex flex-col bg-white'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' className='bg-slate-200 p-1' />

        <label htmlFor='category'>Category</label>
        <select id='category' className='bg-slate-200 p-1 my-1'>
          <option value='fruits'>Fruits</option>
          <option value='vegetable'>Vegetables</option>
          <option value='iceCream'>Ice Cream</option>
          <option value='pizza'>Pizza</option>
          <option value='dosa'>Dosa</option>
        </select>

        <label htmlFor='image'>Image</label>
        <div className='h-40 cursor-pointer w-full bg-slate-200 my-3 flex items-center justify-center'>
          <span className='text-5xl'><AiOutlineCloudUpload /></span>
          <input type='file' id='image' onChange={uploadImage} className='hidden' />
        </div>

        <label htmlFor='price'>Price</label>
        <input type='text' id='price' name='price' className='bg-slate-200 p-1' />

        <label htmlFor='description'>Description</label>
        <textarea id='description' rows={2} className='bg-slate-200 p-1 my-1 resize-none'></textarea>

        <button type='submit' className='bg-slate-400 hover:bg-blue-500 text-white font-bold my-2 drop-shadow-sm'>
          Save
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
