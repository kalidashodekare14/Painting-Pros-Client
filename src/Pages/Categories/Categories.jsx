import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://painting-pros-server.vercel.app/art_category')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    },[])

    


    return (
        <div>
            {
                categories.map(data => <div>
                        <h1>datas</h1>
                </div>)
            }
        </div>
    );
};

export default Categories;