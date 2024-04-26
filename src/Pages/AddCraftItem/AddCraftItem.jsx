import React from 'react';

const AddCraftItem = () => {

    const handleAddPainting = e =>{
        e.preventDefault()
        const from = e.target
        const  item_name = from.name.value
        const subcategory_Name = from.subTitle.value
        const price = from.price.value
        const rating = from.rating.value
        // const customization = 
        const  processing_time = from.processingTime.value
        // const stockStatus
        
    }

    return (
        <div className='min-h-screen'>
            <div className='lg:mx-40 mx-5 shadow-xl p-5 mt-10'>
                <h1 className='text-center text-4xl my-5 font-work'>Add Your Painting</h1>
                <form onSubmit={handleAddPainting} className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Name</label>
                        <input className='input input-bordered' type="text" name="name" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Subcategory Name</label>
                        <input className='input input-bordered' type="text" name="subTitle" id="" />
                    </div>
                    <div className='flex space-x-3'>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Price</label>
                            <input className='input input-bordered w-full' type="number" name="price" id="" />
                        </div>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label className='font-work font-[600] text-[#000000bd]' htmlFor="">Rating</label>
                            <input className='input input-bordered w-full' type="number" name="rating" id="" />
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
                        <input type="radio" name="radio-1" className="radio" checked />
                        <p>Yes</p>
                        <input type="radio" name="radio-1" className="radio" />
                        <p>No</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h1 className='font-work font-[600] text-[#000000bd]'>Stock Status</h1>
                        <input type="radio" name="radio-2" className="radio" checked />
                        <p>In stock</p>
                        <input type="radio" name="radio-2" className="radio" />
                        <p>Made to Order</p>
                    </div>
                    <input className='btn w-full' type="submit" value="Add Your Data" />
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;