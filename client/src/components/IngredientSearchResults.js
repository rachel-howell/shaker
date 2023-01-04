import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const IngredientSearchResults = () => {

    const [ cocktailList, setCocktailList ] = useState([]);
    const [ newSearch, setNewSearch ] = useState("");
    const { ingredient } = useParams();
    const imgStyle = {
        height: '28vh'
    }
    const divStyle = {
        width: '100vh'
    }

    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`)
            .then((res) => setCocktailList(res.data.drinks))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/isearch/${newSearch}`);
        window.location.reload();
    }



  return (
    <div className="container d-flex flex-column col-md-10 col-12 mx-auto bg-info">
        <div className="container d-flex flex-column align-items-start">
            <h6>Ingredient search results for...</h6>
            <form className="form-control d-flex" onSubmit={submitHandler}>
                <input className="me-3 border" type="text" placeholder={ingredient} onChange={(e)=>setNewSearch(e.target.value)}/>
                <input className="btn border" type="submit" />
            </form>
        </div>
        <div className="d-flex col-12 flex-wrap" >
            {
                cocktailList ? cocktailList.map(drink => (
                    <div className="d-flex flex-column bg-danger mx-1">
                        <img className="p-3 rounded" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/>
                        <Link className="text-wrap" to={`/details/${drink.idDrink}`}>{drink.strDrink}</Link>
                    </div>
                )) : <p>No results found. Try a different search.</p>
            }
        </div>
    </div>
  )
}

export default IngredientSearchResults