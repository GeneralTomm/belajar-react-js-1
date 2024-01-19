import { useState } from "react";

const Create = () => {
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author , setAuthor] = useState("");


    const [isPending , setIsPending] = useState(false);
    const handleSubmit = e =>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author}
        
        const abort = new AbortController();
        fetch('http://localhost:9000/blogs',{
            signal:abort.signals,
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(blog)
        })
        .then( ()=> {
            setIsPending(false);
        })
        return ()=> abort.abort();
    }
    return ( 
        <div className="create">
            <h2>Buat Blog Baru !</h2>
            <form onSubmit={handleSubmit}>
                <label>Judul Blog :</label>
                <input type="text" value={title} name="title" id="title" required onChange={ e => setTitle(e.target.value)} />
                
                <label>Konten Blog :</label>
                <textarea name="body" id="body" value={body} required onChange={ e => setBody(e.target.value)}></textarea>

                <label>Penulis Blog :</label>
                <select name="author" id="author" value={author} onChange={ e => setAuthor(e.target.value)}>
                    <option value="Michikatsu">Michikatsu</option>
                    <option value="Yoriichi">Yoriichi</option>
                    <option value="Tanjirou">Tanjirou</option>
                    <option value="Nezuko">Nezuko</option>
                    <option value="Shinobu">Shinobu</option>
                    <option value="Kanae">Kanae</option>
                </select>
                
                {!isPending && <button>Post Blog Baru!</button>}
                {isPending && <button disabled>Sedang menambahkan Blog!</button>}
            </form>
        </div>
     );
}
 
export default Create;