import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNew = () => {

    const [ cocktailName, setCocktailName ] = useState("");
    const [ ingredientOne, setIngredientOne ] = useState("");
    const [ ingredientTwo, setIngredientTwo ] = useState("");
    const [ ingredientThree, setIngredientThree ] = useState("");
    const [ ingredientFour, setIngredientFour ] = useState("");
    const [ ingredientFive, setIngredientFive ] = useState("");
    const [ ingredientSix, setIngredientSix ] = useState("");
    const [ ingredientSeven, setIngredientSeven ] = useState("");
    const [ quantityOne, setQuantityOne ] = useState("");
    const [ quantityTwo, setQuantityTwo ] = useState("");
    const [ quantityThree, setQuantityThree ] = useState("");
    const [ quantityFour, setQuantityFour ] = useState("");
    const [ quantityFive, setQuantityFive ] = useState("");
    const [ quantitySix, setQuantitySix ] = useState("");
    const [ quantitySeven, setQuantitySeven ] = useState("");
    const [ glass, setGlass ] = useState("");
    const [ instructions, setInstructions ] = useState("");
    const [ imgUrl, setImgUrl ] = useState("");
    const [ creator, setCreator ] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const newCocktail = {
            strDrink: cocktailName,
            strGlass: glass,
            strDrinkThumb: imgUrl,
            strIngredient1: ingredientOne,
            strIngredient2: ingredientTwo,
            strIngredient3: ingredientThree,
            strIngredient4: ingredientFour,
            strIngredient5: ingredientFive,
            strIngredgient6: ingredientSix,
            strIngredient7: ingredientSeven,
            strMeasure1: quantityOne,
            strMeasure2: quantityTwo,
            strMeasure3: quantityThree,
            strMeasure4: quantityFour,
            strMeasure5: quantityFive,
            strMeasure6: quantitySix,
            strMeasure7: quantitySeven,
            strInstructions: instructions,
            creator: creator
        }

        console.log(newCocktail)

        axios
            .post(`http://localhost:8000/api/create`, newCocktail )
            .then((res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        // navigate('/')
    }

  return (
    <div>
        <h1>Add New Cocktail</h1>
        <form className="p-3 d-flex flex-column col-12 col-md-6 mx-auto" onSubmit={submitHandler}>
            <div className="mb-3">

                <div className="d-flex flex-row mx-auto col-12">
                    <div className="form-floating mb-3 col-6 me-2">
                        <input className="form-control" type="text" onChange={(e)=>setCocktailName(e.target.value)}/>
                        <label className="form-label">Cocktail Name</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input className="form-control" type="text" onChange={(e)=>setGlass(e.target.value)}/>
                        <label className="form-label">Type of Glass</label>
                    </div>
                </div>

                <div className="form-floating mb-3 col-12 mx-auto">
                    <input className="form-control" type="text" onChange={(e)=>setImgUrl(e.target.value)}/>
                    <label className="form-label">Image URL</label>
                </div>

                <div className="d-flex flex-column mb-3">
                    <p>Ingredients:</p>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientOne(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityOne(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientTwo(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityTwo(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientThree(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityThree(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientFour(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityFour(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientFive(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityFive(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientSix(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantitySix(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientSeven(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" onChange={(e)=>setQuantitySeven(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    
                </div>

                <div className="d-flex flex-column">
                    <label>Instructions:</label>
                    <textarea rows="5" className="form-control" onChange={(e)=>setInstructions(e.target.value)}></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-success border col-3 mx-auto"/>
        </form>
    </div>
  )
}

export default AddNew