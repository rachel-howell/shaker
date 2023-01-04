import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {

    const [ cocktailList, setCocktailList ] = useState([]);
    const [ newSearch, setNewSearch ] = useState("");
    const { name } = useParams();
    const imgStyle = {
        height: '25vh'
    }
    const divStyle = {
        width: '100vh'
    }

    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${name}`)
            .then((res) => setCocktailList(res.data.drinks))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${newSearch}`);
        window.location.reload();
    }



  return (
    <div className="container row d-flex flex-column align-items-start bg-primary mx-auto col-md-10 col-12">
        <div className="container d-flex flex-column align-items-start col-12 col-md-6">
            <h5>Search results for...</h5>
            <form className="form-control d-flex" onSubmit={submitHandler}>
                <input className="me-3 no-border form-control" type="text" placeholder={name} onChange={(e)=>setNewSearch(e.target.value)}/>
                <input className="btn border" type="submit" />
            </form>
        </div>
        <div className="d-flex col-12 flex-wrap p-2 bg-info" >
            {
                cocktailList ? cocktailList.map(drink => (
                    <div className="d-flex flex-column bg-danger">
                        <img className="p-3 rounded" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/>
                        <Link to={`/details/${drink.idDrink}`}>{drink.strDrink}</Link>
                    </div>
                )) : <p className="d-flex flex-column mx-auto">No results found. Try a different search.</p>
            }
        </div>
    </div>
  )
}

export default SearchResults