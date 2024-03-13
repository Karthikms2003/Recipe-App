import React, { useEffect, useState } from 'react'
import styles from"./search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="d53a4d2041ec4752a349df60aba2e591";

function Search({foodData,setFoodData}) {
    const [query,setQuery]=useState("pizza")

    useEffect(()=>{
     async  function fetchfood(){
       const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
    const data=await res.json()
    console.log(data.results)
    setFoodData(data.results)

       }
       fetchfood()
    },[query])
     
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
    </div> 
  )
}

export default Search
