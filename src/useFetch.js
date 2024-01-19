import { useState, useEffect } from "react";

export default function useFetch(path){
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();
        fetch(`http://localhost:9000${path}`,{signal : abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error("Tidak dapat mengambil data");
            }
            return res.json();
        })
        .then( res => {
            setData(res);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === "AbortError"){
                console.log("Fetch dibatalkan");
            }else{
                setError(err.message);
                setIsPending(false);
            }
        })
        return ()=> abortCont.abort();
    },[path]);

    return {
        data, isPending,error
    }
}