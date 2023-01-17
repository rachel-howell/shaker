import React, { useState } from 'react'

const AddNew = () => {

    const [ cocktailName, setCocktailName ] = useState("");
    const [ ingredients, setIngredients ] = useState("");
    const [ instructions, setInstructions ] = useState("");
    const [ imgUrl, setImgUrl ] = useState("");

  return (
    <div>
        <form className="p-3 d-flex flex-column col-12 col-md-6 mx-auto" onSubmit={console.log("submitted")}>
            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Type search here..." onChange={(e)=>cocktailName(e.target.value)}/>
            </div>
        </form>
    </div>
  )
}

export default AddNew