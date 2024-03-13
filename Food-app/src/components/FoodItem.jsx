import React from 'react'
import styles from "./fooditem.module.css"
function FoodItem({food,setFoodId}) {
  return (
    <div className={styles.itemContainer}>
    <img className={styles.itemImage} src={food.image} alt="" />
    <div className={styles.itemContent}>
     <p className={styles.itemName}>{food.title}</p>

 </div>
 <div className={styles.buttonContainer}>
 <button onClick={()=>{setFoodId(food.id)}} className={styles.itemButton}>View Recipie</button>
 </div>
     
      
    </div>
  )
}

export default FoodItem
