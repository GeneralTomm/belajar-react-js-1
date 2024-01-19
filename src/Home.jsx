import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState(null);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter( i => i.id !== id);
        setBlogs(newBlogs);
    }


    useEffect(()=> {
        fetch("http://localhost:9000/blogs")
        .then(res => res.json())
        .then( res => {
            console.log(res);
            setBlogs(res);
        })
    },[]);

    return ( 
        <div className="home">
            {blogs && ( <BlogList blogs={blogs} title="Beranda :" handleDelete={handleDelete}/>)}
        </div>
     );
}
 
export default Home;