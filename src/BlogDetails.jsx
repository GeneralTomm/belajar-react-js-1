import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {data:blog , error,isPending} = useFetch(`/blogs/${id}`)
    const handleDelete = ()=>{
        const abort = new AbortController();
        fetch(`http://localhost:9000/blogs/${id}`,{
            method:"DELETE",
            signal:abort.signal
        })
        .then(()=>{
            navigate('/');
        })
        return ()=> abort.abort();
    }
    
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ...</div> }
            { error && <div>Error! {error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Ditulis oleh : {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete}>Hapus Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;