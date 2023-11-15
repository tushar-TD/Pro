import React, { useState } from 'react'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { AiOutlineCloudUpload } from "react-icons/ai"
import toast from 'react-hot-toast';
function NewProduct() {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    const { name, image, category, price } = data
    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const fetchRes = await fetchData.json()
      console.log(fetchRes)
      toast(fetchRes.message)
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: ""
        }
      })
    }
    else {
      toast("Enter require fields")
    }


  }

  return (
    <div className='p-5'>
      <form className=' m-auto w-full max-w-md my-2 flex flex-col shadow' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name='name' className=' focus-within:outline-violet-700  bg-slate-200 p-1 my-1' onChange={handleOnchange} value={data.name} />

        <label htmlFor='category' >Category</label>
        <select name='category' className='  bg-slate-200 p-1 my-1' id='category' onChange={handleOnchange} value={data.category}>
          <option value={"Other"}>Select Category</option>
          <option value={"Fruits"}>Fruits</option>
          <option value={"Grocery"}>Grocery</option>
          <option value={"Vegetable"}>Vegetable</option>
          <option value={"Dairy,Bread & Eggs"}> Dairy,Bread & Eggs</option>
          <option value={"Biscuits"}> Biscuits</option>
          <option value={"Paan Corner"}> Paan Corner</option>
          <option value={"Home Needs"}> Home Needs</option>
          <option value={"Meat,Fish"}> Meat,Fish</option>
          <option value={"Breakfast & Sauces"}> Breakfast & Sauces</option>
          <option value={"Tea,Coffee & More"}> Tea,Coffee & More</option>
          <option value={"Cold Drinks"}> Cold Drinks</option>
          <option value={"Masala Dry Fruits"}> Masala Dry Fruits</option>
          <option value={"Baby Food"}> Baby Food</option>




        </select>

        <label htmlFor='Image'>Image
          <div className='cursor-pointer h-40 w-full flex items-center justify-center bg-slate-200  rounded'>
            {
              data.image ? <img src={data.image} className='h-full' /> : <span className='text-5xl'>
                <AiOutlineCloudUpload /></span>
            }


            <input type={'file'} accept='Image/*' id='Image' onChange={uploadImage} className='hidden'></input>
          </div>
        </label>

        <lable htmlFor='price' className='my-1 '>Price</lable>
        <input type={'text'} name='price' className='  bg-slate-200 p-1 my-1 focus-within:outline-violet-700 ' onChange={handleOnchange} value={data.price} />

        <label htmlFor='description' >Description</label>
        <textarea name='description' className='focus-within:outline-violet-700  resize-none  bg-slate-200 p-1 my-1' onChange={handleOnchange} rows={3} value={data.description}></textarea>

        <button className='bg-violet-600 hover:bg-violet-400 text-white text-lg font-bold my-2 drop-shadow focus-within:outline-violet-700 '>Save</button>

      </form>
    </div >
  )
}

export default NewProduct
