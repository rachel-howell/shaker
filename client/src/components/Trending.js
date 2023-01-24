import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Trending = () => {

    const divStyle = {
        height: "35vh",
        backgroundColor: "yellow"
    }

    const imgStyle = {
        height: '12em'
    }

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const [ cocktailList, setCocktailList ] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`)
            .then((res) => setCocktailList(res.data.drinks))
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
        <h2>Popular Cocktails</h2>
        <div className="d-flex col-12 col-md-10 mx-auto my-auto flex-wrap" >
            {
                cocktailList ? cocktailList.slice(0,8).map(drink => (
                    <div className="d-flex flex-column mx-auto">
                        <Link to={`/details/${drink.idDrink}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                        <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
                    </div>
                )) : <p className="d-flex flex-column mx-auto">Something went wrong.</p>
            }
        </div>
    </>
  )
}

export default Trending