import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BrowseAll = () => {

  const imgStyle = {
    height: '25vh'
  }

  const linkStyle = {
      color: 'black',
      textDecoration: 'none'
  }

  www.thecocktaildb.com/api/json/v1/1/search.php?f=a

  const [ cocktailList, setCocktailList ] = useState([]);

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  useEffect(()=>{
      axios
          .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${a}`)
          .then((res) => setCocktailList(res.data.drinks))
          .catch(err => {
              console.log(err)
          })
  }, [])

  const searchByLetter = (letter) => {
      axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`)
            .then((res) => setCocktailList(res.data.drinks))
            .catch(err => {
                console.log(err)
            })
    }
  }

  return (
    <div className="bg-danger d-flex flex-column">

      <div className="container d-flex flex-column align-items-center col-12 my-2">
        <h2>Browse All Cocktails</h2>

        A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | #

      </div>

      <div className="d-flex flex-wrap">
        {
          cocktailList ? cocktailList.map(drink => (
              <div className="d-flex flex-column mx-auto">
                  <Link to={`/details/${drink.idDrink}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                  <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
              </div>
          )) : <p className="d-flex flex-column mx-auto">Something went wrong.</p>
        }
      </div>
      
    </div>
  )
}

export default BrowseAll