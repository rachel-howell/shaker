import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';

const SearchResults = () => {

    const [ cocktailList, setCocktailList ] = useState([]);
    const [ newSearch, setNewSearch ] = useState("");
    const { name } = useParams();
    const { navShow, setNavShow } = useContext(UserContext);

    const imgStyle = {
        height: '18em'
    }

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const divStyle = {
        minHeight: '50vh'
    }

    const navigate = useNavigate();

    useEffect(()=>{
        name ? 
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${name}`)
            .then((res) => res.data.drinks ? setCocktailList(res.data.drinks) : setCocktailList(false))
            .catch(err => {
                console.log(err)
            })
        : setCocktailList(false)

        setNavShow(true)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${newSearch}`);
        window.location.reload();
    }



  return (
    <div className="container row d-flex flex-column align-items-start mx-auto col-md-10 col-12">
        <div className="container d-flex flex-column align-items-start col-12 col-md-6 my-2" >
            <h5 className="ms-3">Search results for...</h5>
            <form className="form-control d-flex border-0" onSubmit={submitHandler}>
                <input className="me-3 no-border form-control" type="text" defaultValue={name} onChange={(e)=>setNewSearch(e.target.value)}/>
                <input className="btn border" type="submit" />
            </form>
        </div>
        <div className="d-flex col-12 flex-wrap p-2" style={divStyle}>
            {
                cocktailList ? cocktailList.map(drink => (
                    <div className="d-flex flex-column mx-auto mb-2">
                        <Link to={`/details/${drink.idDrink}`}><img className="my-2 rounded" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                        <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
                    </div>
                )) : <p className="d-flex flex-column mx-auto">No results found. Try a different search.</p>
            }
        </div>
    </div>
  )
}

export default SearchResults
