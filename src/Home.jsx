import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState([
        {
            id:1,
            title:"Pernafasan Matahari",
            author:"Yoriichi Tsugikuni",
            body:"pernafasan matahari adalah teknik pertama yang ditemukan di era Sengoku oleh seorang pendekar pedang yang bernama Yoriichi tsugikuni"
        },
        {
            id:2,
            title:"Pernafasan Bulan",
            author:"Kokushibou",
            body:"Pernafasan bulan adalah teknik pernafasan yang ditemukan diera sengoku , yang merupakan cabang langsung dari pernafasan matahari."
        },
        {
            id:3,
            title:"Pernafasan angin",
            author:"Shinazugawa sanemi",
            body:"Pernafasan angin merupakan teknik yang ditemukan oleh seorang pendekar pedang dari era Sengoku dan pengguna yang diketahui adalah Shinazugawa Sanemi"
        }
    ]);
    
    const [name,setName] = useState("Kokushibou");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( i => i.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=> {
        console.log("useEffect run !");
    },[]);

    useEffect(function(){
        console.log("nilai nama mengalami perubahan");
    },[name]);
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="Beranda :" handleDelete={handleDelete}/>
            <button onClick={()=> setName("Michikatsu")}>test</button>
        </div>
     );
}
 
export default Home;