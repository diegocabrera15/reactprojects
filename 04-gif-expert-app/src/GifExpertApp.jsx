import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
    const onAddCategory = ( newCategory ) => {        
        console.log(newCategory);
        
        
        setCategories( [newCategory, ...categories]);
        // setCategories( cat => ['Valorant', ...cat]);
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            { /* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={ onAddCategory }
            />
            {/* Gif list  */}
            {/* <button onClick={onAddCategory}>Add</button> */}
            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                }) }
            </ol>
            {/* Gif item */}
        </>
    )
}