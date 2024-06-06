import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Category.css'

export default function Category() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const fetchCategories = async ()=> {
            try{
                const response = await axios.get('http://127.0.0.1:8000/categories/')
                setCategories(response.data)
            } catch(error){
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories()
    },[])
  return (
    <div className='category-container'>
        { categories && categories.map((category , index) =>(
            <div className="categories">
                <img src={category.image} width={15} height={15} alt="" />
                <p className='c-name'>{ category.name}</p>
            </div>
        )) }
    </div>
  )
}
