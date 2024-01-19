import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect } from "react";
const Home = () => {
    const {data:blogs , isPending , error} = useFetch('/blogs');
    const handleDelete = (id) => {
        // const newBlogs = blogs.filter( i => i.id !== id);
        // setBlogs(newBlogs);
    }

    useEffect(() => {
        if(error != null){
            alert(error);
        }
    },[error]);

    return ( 
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && ( <BlogList blogs={blogs} title="Beranda :" handleDelete={handleDelete}/>)}
        </div>
     );
}
 
export default Home;