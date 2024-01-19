import { Link } from "react-router-dom";

const BlogList = ({title,blogs}) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map( item => (
             <div className="blog-preview" key={item.id}>
                 <Link to={`/blogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>Ditulis Oleh : {item.author}</p>
                 </Link>
             </div>
            ))}
        </div>
     );
}
 
export default BlogList;