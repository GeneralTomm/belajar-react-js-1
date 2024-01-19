import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog , error,isPending} = useFetch(`/blogs/${id}`)
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
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;