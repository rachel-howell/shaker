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
        minHeight: '50vh'
    }

    const navigate = useNavigate();

    useEffect(()=>{
        ingredient ? 
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`)
            // .then((res) => console.log(res.data.drinks))
            // .then((res) => setCocktailList(res.data.drinks))
            .then((res) => (res.data.drinks != "None Found")? setCocktailList(res.data.drinks) : setCocktailList(false))
            .catch(err => {
                console.log(err)
            })
        : setCocktailList(false)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/isearch/${newSearch}`);
        window.location.reload();
    }



  return (
    <div className="container row d-flex flex-column align-items-start mx-auto col-md-10 col-12">
        <div className="container d-flex flex-column align-items-start col-12 col-md-6 my-2">
            <h5 className="ms-3">Search results for...</h5>
            <form className="form-control d-flex border-0" onSubmit={submitHandler}>
                <input className="me-3 border form-control" type="text" placeholder={ingredient} onChange={(e)=>setNewSearch(e.target.value)}/>
                <input className="btn border" type="submit" />
            </form>
        </div>
        <div className="d-flex col-12 flex-wrap p-2" style={divStyle}>
            {
                cocktailList ? cocktailList.map(drink => (
                    <div className="d-flex flex-column mx-auto">
                        <img className="p-3 rounded" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/>
                        <Link className="text-wrap" to={`/details/${drink.idDrink}`}>{drink.strDrink}</Link>
                    </div>
                )) : <p className="d-flex flex-column mx-auto">No results found. Try a different search.</p>
            }
        </div>
    </div>
  )
}

export default IngredientSearchResults