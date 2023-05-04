import React, { useState, useEffect, useCallback } from "react";

const Card =() =>{
    const[data, setData] = useState({})
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState(null)

    const url = "https://dummyjson.com/products/1";

    async function fetchProduct(){
        await fetch(url)
            .then(data=> data.json())
            .then(data=> {setValue(data); console.log(data)})
            .catch(err => setError(err.message))
    }



    const fetchData= useCallback(async ()=>{
        setIsLoading(true);
        try{
            const res = await fetch(url,{
                method:'GET',
                headers:{
                    'content-type': 'application/json'
                }
            });
            if(res.ok){
                const data = await res.json();
                setData(data);
                setIsLoading(false);
            }
            else{
                console.log('Error: Network connection was lost')
            }
        } catch(err){
            setError(err.message);
            setIsLoading(false);
        }
    },[]);
    useEffect(()=>{
            fetchData();
        }, [fetchData]

    )
    if(error){
        return <p>Error: {error}</p>
    }
    if(isLoading){
        return <p>Loading...</p>
    }
    return(
        <div>
            <p>Brand Name: {data.brand}</p>
        </div>
    )
}
export default Card;