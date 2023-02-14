import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

const EditCocktail = () => {

    const {id} = useParams();

    const [ cocktail, setCocktail ] = useState({});
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
    const [ errors, setErrors ] = useState([]);
    const [ uniqueError, setUniqueError ] = useState(false)
    const [ authError, setAuthError ] = useState(false)

    const navigate = useNavigate();

    useEffect (() => {
        axios
            .get(`http://localhost:8000/api/getOne/${id}`)
            .then((res) => 
                setCocktail(res.data),
                setCocktailName(cocktail.strDrink),
                setIngredientOne(cocktail.strIngredient1),
                setIngredientTwo(cocktail.strIngredient2),
                setIngredientThree(cocktail.strIngredient3),
                setIngredientFour(cocktail.strIngredient4),
                setIngredientFive(cocktail.strIngredient5),
                setIngredientSix(cocktail.strIngredgient6),
                setIngredientSeven(cocktail.strIngredient7),
                setQuantityOne(cocktail.strMeasure1),
                setQuantityTwo(cocktail.strMeasure2),
                setQuantityThree(cocktail.strMeasure3),
                setQuantityFour(cocktail.strMeasure4),
                setQuantityFive(cocktail.strMeasure5),
                setQuantitySix(cocktail.strMeasure6),
                setQuantitySeven(cocktail.strMeasure7),
                setGlass(cocktail.glass),
                setInstructions(cocktail.instructions),
                setImgUrl(cocktail.strDrinkThumb),
                setCreator(cocktail.creator)

            )
            .catch(err => console.log(err))
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedCocktail = {
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

        axios
            .put(`http://localhost:8000/api/update/${id}`, updatedCocktail, {withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log("RES", res)
                navigate('/')
            })
            .catch(err => {
                if(err.response.data.errors){
                    setErrors(err.response.data.errors)
                } else if(err.response.data.code == 11000){
                    setUniqueError(true)
                } else if(err.response.status == 401){
                    setAuthError(true)
                } 
                console.log("ERR", err)
            })
    }

  return (
    <div>
        <h1>Add New Cocktail</h1>
        <form className="p-3 d-flex flex-column col-12 col-md-6 mx-auto" onSubmit={submitHandler}>
            <div className="mb-3">

                <div className="d-flex flex-row mx-auto col-12">
                    <div className="form-floating mb-3 col-6 me-2">
                        <input className="form-control" type="text" defaultValue={cocktail.strDrink} onChange={(e)=>setCocktailName(e.target.value)}/>
                        <label className="form-label">Cocktail Name</label>
                        {
                            errors.strDrink ? <p className="text-danger">{errors.strDrink.message}</p> : null
                        }
                        {
                            uniqueError ? <p className="text-danger">A cocktail with that name already exists in the database.</p> : null
                        }
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input className="form-control" type="text" defaultValue={cocktail.strGlass} onChange={(e)=>setGlass(e.target.value)}/>
                        <label className="form-label">Type of Glass</label>
                        {
                            errors.strGlass ? <p className="text-danger">{errors.strGlass.message}</p> : null
                        }
                    </div>
                </div>

                <div className="form-floating mb-3 col-12 mx-auto">
                    <input className="form-control" type="text" defaultValue={cocktail.strDrinkThumb} onChange={(e)=>setImgUrl(e.target.value)}/>
                    <label className="form-label">Image URL</label>
                    {
                        errors.strDrinkThumb ? <p className="text-danger">{errors.strDrinkThumb.message}</p> : null
                    }
                </div>

                <div className="d-flex flex-column mb-3">
                    <p>Ingredients:</p>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient1} onChange={(e)=>setIngredientOne(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure1} onChange={(e)=>setQuantityOne(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>
                    {
                        errors.strIngredient1 ? <p className="text-danger">{errors.strIngredient1.message}</p> : null
                    }

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient2} onChange={(e)=>setIngredientTwo(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure2} onChange={(e)=>setQuantityTwo(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient3} onChange={(e)=>setIngredientThree(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure3} onChange={(e)=>setQuantityThree(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient4} onChange={(e)=>setIngredientFour(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure4} onChange={(e)=>setQuantityFour(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient5} onChange={(e)=>setIngredientFive(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure5} onChange={(e)=>setQuantityFive(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient6} onChange={(e)=>setIngredientSix(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure6} onChange={(e)=>setQuantitySix(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 me-3">
                            <input className="form-control" type="text" defaultValue={cocktail.strIngredient7} onChange={(e)=>setIngredientSeven(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6">
                            <input className="form-control" type="text" defaultValue={cocktail.strMeasure7} onChange={(e)=>setQuantitySeven(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    
                </div>

                <div className="d-flex flex-column">
                    <label>Instructions:</label>
                    <textarea rows="5" className="form-control" defaultValue={cocktail.strInstructions} onChange={(e)=>setInstructions(e.target.value)}></textarea>
                    {
                        errors.strInstructions ? <p className="text-danger">{errors.strInstructions.message}</p> : null
                    }
                    {
                        authError ? <p className="text-danger">You must be <Link to="/login">logged in</Link> to edit a cocktail.</p> : null
                    }
                </div>
            </div>
            <input type="submit" className="btn btn-success border col-3 mx-auto"/>
        </form>
    </div>
  )
}

export default EditCocktail