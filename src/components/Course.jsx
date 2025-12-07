import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className='mt-16 items-center justify-center text-center pt-18'>
    <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
    <p className='mt-8'>Welcome to our world of stories and imagination. We’re truly delighted to have you here. Explore inspiring reads, meaningful ideas, and books that open new perspectives.Discover books that comfort, inspire, and stay with you long after the last page. Take a moment, browse around, and let your next great story find you.Explore freely and find the story that speaks to you.</p>
    <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration 300'>Back</button>

    </Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
    {
       list.map((item)=>(
        <Cards key={item.id} item={item}/>
       ))
    }
</div>
    </div>
  )
}

export default Course