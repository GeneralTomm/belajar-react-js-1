const BlogList = ({title,blogs , handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map( item => (
             <div className="blog-preview" key={item.id}>
                 <h2>{item.title}</h2>
                 <p>Written By : {item.author}</p>
                 <button onClick={()=> handleDelete(item.id)}>Delete Blog</button>
             </div>
            ))}
        </div>
     );
}
 
export default BlogList;