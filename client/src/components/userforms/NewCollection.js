import React, { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../UserContext';

const NewCollection = () => {

    const { user } = useContext(UserContext);

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ drinkList, setDrinkList ] = useState([]);
    const [ creator, setCreator ] = useState(user);
    const [ privacy, setPrivacy ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const newCollection = {
            title,
            description,
            drinkList,
            creator,
            privacy
        }

        axios
            .post(`http://localhost:8000/api/createcollection`, newCollection, {withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log("RES", res)
                // navigate('/')
            })
            .catch(err => {
                if(err.response.data.errors){
                    setErrors(err.response.data.errors)
                }
                console.log("ERR", err)
            })
    }

  return (
    <div>
        <h1>Create New Collection</h1>
        <form className="p-3 d-flex flex-column col-12 col-lg-8 col-xl-6 mx-auto" onSubmit={submitHandler}>
            <div className="mb-3 col-12">
                <div className="d-flex flex-row mx-auto col-12">
                    <div className="form-floating mb-3 col-6 col-md-5 mx-auto">
                        <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)}/>
                        <label className="form-label">Cocktail Name</label>
                        {/* {
                            errors.strDrink ? <p className="text-danger">{errors.strDrink.message}</p> : null
                        }
                        {
                            uniqueError ? <p className="text-danger">A cocktail with that name already exists in the database.</p> : null
                        } */}
                    </div>
                    {/* <div className="form-floating col-md-5 mx-auto mb-3 col-6">
                        <input className="form-control" type="text" onChange={(e)=>setGlass(e.target.value)}/>
                        <label className="form-label">Type of Glass</label>
                        {
                            errors.strGlass ? <p className="text-danger">{errors.strGlass.message}</p> : null
                        }
                    </div> */}
                </div>

                {/* <div className="form-floating mb-3 col-12 col-md-11 mx-auto">
                    <input className="form-control" type="text" onChange={(e)=>setImgUrl(e.target.value)}/>
                    <label className="form-label">Image URL</label>
                    {
                        errors.strDrinkThumb ? <p className="text-danger">{errors.strDrinkThumb.message}</p> : null
                    }
                </div>

                <div className="d-flex flex-column mb-3">
                    <p>Ingredients:</p>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientOne(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityOne(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>
                    {
                        errors.strIngredient1 ? <p className="text-danger">{errors.strIngredient1.message}</p> : null
                    }

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientTwo(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityTwo(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientThree(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityThree(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientFour(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityFour(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientFive(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantityFive(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientSix(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantitySix(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-auto col-12 mb-2">
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setIngredientSeven(e.target.value)}/>
                            <label className="form-label">Ingredient</label>
                        </div>
                        <div className="form-floating col-6 col-md-5 mx-auto">
                            <input className="form-control" type="text" onChange={(e)=>setQuantitySeven(e.target.value)}/>
                            <label className="form-label">Quantity</label>
                        </div>
                    </div>

                    
                </div>

                <div className="d-flex flex-column col-12 col-md-11 mx-auto">
                    <label>Instructions:</label>
                    <textarea rows="5" className="form-control" onChange={(e)=>setInstructions(e.target.value)}></textarea>
                    {
                        errors.strInstructions ? <p className="text-danger">{errors.strInstructions.message}</p> : null
                    }
                    {
                        authError ? <p className="text-danger">You must be <Link to="/login">logged in</Link> to add a new cocktail.</p> : null
                    }
                </div> */}
            </div>
            <input type="submit" className="btn btn-dark border col-3 mx-auto"/>
        </form>
    </div>
  )
}

export default NewCollection