import React,  { useEffect, useState }  from "react";

  
export default function Products(){
    const setUser=useState([])

    const fetchData=() =>{
        console.log("fetchData")
    return(
      fetch("http://localhost:4000/graphql")
      .then(res => res.json())
      .then(data =>  {
    console.log("data", data)
    setUser(data)})
    )
    }
    
    useEffect(()=>{
      fetchData();
      console.log("Fetching", fetchData())
    },[])
    return (
        <div>Products</div>
    )

    
    
}