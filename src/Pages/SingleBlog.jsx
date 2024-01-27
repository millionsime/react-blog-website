import React from 'react'
import { useLoaderData } from 'react-router-dom'


const SingleBlog = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-white text-center px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog</h2>
      </div>

      {/* blog details */}
      <div className='maw-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12' >
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} className='w-full mx-auto rounded'/>
          </div>
        </div>
      </div>
      <div className='lg:w-3/4'>
        
      </div>
    </div>
  )
}

export default SingleBlog