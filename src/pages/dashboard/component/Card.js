import React, { useState, useEffect, useCallback } from "react";

const Card =() =>{
    const[data, setData] = useState({})
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState(null)



    // async function fetchProduct(){
    //     await fetch(url)
    //         .then(data=> data.json())
    //         .then(data=> {setValue(data); console.log(data)})
    //         .catch(err => setError(err.message))
    // }

    let count = 0;

    const fetchData= useCallback(async ()=>{
        count++

        const url = "https://dummyjson.com/products/"+count;
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
            <p>Brand Name: {data.description}</p>
            <button onClick={()=>
                fetchData()}>Change</button>
        </div>

    )
}
export default Card;