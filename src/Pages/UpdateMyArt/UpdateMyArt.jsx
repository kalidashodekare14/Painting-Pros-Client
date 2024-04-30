import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyArt = () => {

    const [customization, setCustomization] = useState('')
    const [stockStatus, setStockStatus] = useState('')

    const paints = useLoaderData()
    const { _id } = paints
    console.log(_id)


    const handleCustomization = event => {
        setCustomization(event.target.value)
    }
    const handleStockStatus = event => {
        setStockStatus(event.target.value)
    }

    const handleUpdateMyArt = e => {
        e.preventDefault()
        const from = e.target
        const item_name = from.name.value
        const subcategory_Name = from.subTitle.value
        const short_description = from.shortDescription.value
        const price = from.price.value
        const rating = from.rating.value
        const processing_time = from.processingTime.value
        const image = from.photoUrl.value
        const info = { item_name, subcategory_Name, short_description, price, rating, processing_time, image }
        console.log(info)
        fetch(`http://localhost:5000/update_craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Your Painting Update Successfully",
                        text: "Please Check My Art",
                        icon: "success"
                    });
                }
            })

    }



    return (
        <div className='min-h-screen'>
            <div className='lg:mx-40 mx-5 shadow-xl p-5 mt-10 my-10'>
                <h1 className='text-center text-4xl my-5 font-work'>Update Your Painting</h1>
                <form onSubmit={handleUpdateMyArt} className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Name</label>
                        <input className='input input-bordered' type="text" name="name" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Subcategory Name</label>
                        <input className='input input-bordered' type="text" name="subTitle" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Short Description</label>
                        <input className='input input-bordered' type="text" name="shortDescription" id="" />
                    </div>
                    <div className='flex space-x-3'>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Price</label>
                            <input className='input input-bordered w-full' type="number" name="price" id="" />
                        </div>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Rating</label>
                            <input className='input input-bordered w-full' type="text" name="rating" id="" />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Processing Time</label>
                        <input className='input input-bordered w-full' type="text" name="processingTime" id="" />
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Photo Url</label>
                        <input className='input input-bordered w-full' type="text" name="photoUrl" id="" />
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h1 className='font-work font-[600] text-[#000000bd]'>Customization</h1>
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
                        <h1 className='font-work font-[600] text-[#000000bd]'>Stock Status</h1>
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

export default UpdateMyArt;