import React from 'react'
import Banner from '../Components/Banner'
import BlogPage from '../Components/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner/>

      <div className='mx-w-7xl mx-auto'>
        <BlogPage/>
      </div>
      
    </div>
  )
}

export default Home