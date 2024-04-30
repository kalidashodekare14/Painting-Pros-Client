import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContect } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const AddCraftItem = () => {

    const { user } = useContext(AuthContect)
    const [customization, setCustomization] = useState('')
    const [stockStatus, setStockStatus] = useState('')

    const { email, displayName } = user
    console.log(email)

    const handleCustomization = event => {
        setCustomization(event.target.value)
    }
    const handleStockStatus = event => {
        setStockStatus(event.target.value)
    }

    // console.log(customization)
    // console.log(stockStatus)




    const handleAddPainting = e => {
        e.preventDefault()
        const from = e.target
        const item_name = from.name.value
        const subcategory_Name = from.subTitle.value
        const short_description = from.shortDescription.value
        const price = from.price.value
        const rating = from.rating.value
        const processing_time = from.processingTime.value
        const image = from.photoUrl.value
        const info = { item_name, subcategory_Name, short_description, price, rating, processing_time, customization, stockStatus, image, email, displayName }

        console.log(info)
        fetch('https://painting-pros-server.vercel.app/Craft_Item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your Painting add Succeessfuly",
                        text: "Please Check the Home page",
                        icon: "success"
                    });
                }
                from.reset()

            })

        fetch('https://painting-pros-server.vercel.app/art_category',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    }

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Add Craft Item | Painting Pros</title>
            </Helmet>
            <div className='card lg:mx-52 mx-5 shadow-xl p-5 mt-10'>
                <h1 className='text-center text-4xl my-5 font-work'>Add Your Painting</h1>
                <form onSubmit={handleAddPainting} className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] ' htmlFor="">Name</label>
                        <input className='input input-bordered' type="text" name="name" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] ' htmlFor="">Subcategory Name</label>
                        <input className='input input-bordered' type="text" name="subTitle" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] ' htmlFor="">Short Description</label>
                        <input className='input input-bordered' type="text" name="shortDescription" id="" />
                    </div>
                    <div className='flex space-x-3'>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] ' htmlFor="">Price</label>
                            <input className='input input-bordered w-full' type="number" name="price" id="" />
                        </div>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] ' htmlFor="">Rating</label>
                            <input className='input input-bordered w-full' type="text" name="rating" id="" />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label className='font-work font-[600] ' htmlFor="">Processing Time</label>
                        <input className='input input-bordered w-full' type="text" name="processingTime" id="" />
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label className='font-work font-[600] ' htmlFor="">Photo Url</label>
                        <input className='input input-bordered w-full' type="text" name="photoUrl" id="" />
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h1 className='font-work font-[600] '>Customization</h1>
                        <input type="radio"
                            name="radio-1"
                            className="radio"
                            value="Yes"
                            checked={customization === "Yes"}
                            onChange={handleCustomization}
                        />
                        <p>Yes</p>
                        <input type="radio"
                            name="radio-1"
                            className="radio"
                            value="No"
                            checked={customization === "No"}
                            onChange={handleCustomization}
                        />
                        <p>No</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h1 className='font-work font-[600] '>Stock Status</h1>
                        <input type="radio"
                            name="radio-2"
                            className="radio"
                            value="In stock"
                            checked={stockStatus === "In stock"}
                            onChange={handleStockStatus}
                        />
                        <p>In stock</p>
                        <input type="radio"
                            name="radio-2"
                            className="radio"
                            value="Made to Order"
                            checked={stockStatus === "Made to Order"}
                            onChange={handleStockStatus}

                        />
                        <p>Made to Order</p>
                    </div>
                    <input className='btn w-full' type="submit" value="Add Your Data" />
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;