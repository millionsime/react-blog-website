import { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(() => {
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?pages=${currentPage}&limit=${pageSize}`;

            //filter by category
            if(selectedCategory){
                url += `&category=${selectedCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

        //page change btn
    
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }


    const handleCatagoryChange = () => {
        
        setSelectedCategory(category); 
        setCurrentPage(1);
        setActiveCategory(category);
    }

    // console.log("my data at blog 73", blogs[73].category)
  return (
    <div>
        {/* catagory section */}
        <div><CategorySelection onSelectCategory ={handleCatagoryChange}
         selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

        {/* blogCards section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            {/* blog cards component */}
            <BlogCards blogs={blogs} currentPage={currentPage}
             selectedCategory={selectedCategory} pageSize={pageSize} />

             {/* sidebar component */}
             <div>
                <SideBar/>
             </div>
        </div>

        {/* pagination section */}
        <div>
            <Pagination onPageChange={handlePageChange} 
            currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>
    </div>
  )
}

export default BlogPage