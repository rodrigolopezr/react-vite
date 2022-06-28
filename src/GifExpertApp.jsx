import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (category) => {
        if(categories.includes(category)) return
        setCategories([category, ...categories])
    }

  return (
    <>   
        <h1>GifExpertApp</h1>
        
        <AddCategory 
        // setCategories={setCategories} 
            onNewCategory = {onAddCategory}
        />
       <ol>
            {
                categories.map( (category) =>
                    (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }
       </ol>            
    </>
  )
}
