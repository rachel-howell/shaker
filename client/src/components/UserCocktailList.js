import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserCocktailList = () => {

    const divStyle = {
        height: "35vh",
        backgroundColor: "yellow"
    }

    const imgStyle = {
        height: '25vh'
    }

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const [ cocktailList, setCocktailList ] = useState([]);

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/getAll`)
            .then((res) => setCocktailList(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
        <h2 className="mt-3">Newest Cocktails</h2>
        <div className="d-flex col-12 col-md-10 mx-auto my-auto flex-wrap" >
            {
                cocktailList ? cocktailList.slice(0,6).map(drink => (
                    <div className="d-flex flex-column mx-auto">
                        <Link to={`/userCocktail/${drink._id}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                        <Link to={`/userCocktail/${drink._id}`} style={linkStyle}>{drink.strDrink}</Link>
                    </div>
                )) : <p className="d-flex flex-column mx-auto">Something went wrong.</p>
            }
        </div>
    </>
  )
}

export default UserCocktailList