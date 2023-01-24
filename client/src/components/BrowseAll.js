import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BrowseAll = () => {

  const imgStyle = {
    height: '12em'
  }

  const linkStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  const btnStyle = {
    display:'inline-block'
  }

  const divStyle = {
    minHeight: '58vh'
  }


  const [ cocktailList, setCocktailList ] = useState([]);
  const [ userCocktailList, setUserCocktailList ] = useState([]);

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  useEffect(()=>{
    axios
        .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a`)
        .then((res) => setCocktailList(res.data.drinks))
        .catch(err => {
            console.log(err)
        })
  }, [])

  const searchByLetter = (char) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${char}`)
      .then((res) => setCocktailList(res.data.drinks))
      .catch(err => {
          console.log(err)
      })

    axios
      .get(`http://localhost:8000/api/lettersearch/${char}`)
      .then((res) => setUserCocktailList(res.data))
      .catch(err => {
          console.log(err)
      })
    }

  return (
    <div className="d-flex flex-column" style={divStyle}>

      <div className="container d-flex flex-column align-items-center col-12 my-2" >
        <h2>Browse All Cocktails</h2>
        <div>
          {
            alphabet.map(char => (
              <button className="btn p-1 m-1 shadow-none btn-dark" style={{btnStyle}} onClick={()=>searchByLetter(char)}> 
                &nbsp;{char.toUpperCase()}&nbsp;
              </button>
            ))
          }
        </div>

      </div>

      <div className="d-flex flex-wrap col-lg-10 col-12 mx-auto mb-3">
        {
          userCocktailList ? userCocktailList.map(drink => (
              <div className="d-flex flex-column mx-auto">
                  <Link to={`/userCocktail/${drink._id}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                  <Link to={`/userCocktail/${drink._id}`} style={linkStyle}>{drink.strDrink}</Link>
              </div>
          )) : null
        }
        {
          cocktailList ? cocktailList.map(drink => (
              <div className="d-flex flex-column mx-auto">
                  <Link to={`/details/${drink.idDrink}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                  <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
              </div>
          )) : <p className="d-flex flex-column mx-auto">No cocktails found :(</p>
        }
      </div>
      
    </div>
  )
}

export default BrowseAll