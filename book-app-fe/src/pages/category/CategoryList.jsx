import React, { useEffect, useState } from 'react'
import Category from './Category';
import Axios from 'axios';

export default function CategoryList(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, []);

    function getAllCategories() {
        Axios.get('/product/all')
        .then(res => {
            setCategories(res.data.categories);
        })
        .catch(err => {
            console.log('Error reading product data');
            console.log(err);
        });
    }

    const allCategory = categories.map((product, index) => (
        <div className="mb-5" key={index}>
            <Category {...product} headers={props.headers}/>
        </div>
    ));
    return (
        <div> 
            {allCategory}
        </div>
    )
}