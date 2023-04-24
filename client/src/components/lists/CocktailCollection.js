import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CocktailCollection = ({url, title, numToDisplay, id}) => {

    const imgStyle = {
        height: '23vh'
    }

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const [ cocktailList, setCocktailList ] = useState([]);

    useEffect(()=>{
        axios
            .get(url)
            .then((res) => 
            res.data.drinks ? setCocktailList(res.data.drinks) : setCocktailList(res.data)
            )
            .catch(err => {
                console.log(err)
            })
    }, [])

    // onClick function that will pass the id of the collection to the ViewCollection component

  return (
    <>
        <h2 className="mt-4">{title}</h2>
        <div className="d-flex col-12 col-md-10 mx-auto my-auto flex-wrap" >
            {
                cocktailList ? 
                Array.isArray(cocktailList) 
                ? cocktailList.slice(0,numToDisplay).map(drink => (
                      <div className="d-flex flex-column mx-auto mb-3 mt-1">                     
                          {
                              drink.idDrink ? 
                              <>
                              <Link to={`/details/${drink.idDrink}`}><img className="rounded mb-1" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link> 
                              <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link> 
                              </> : null
                          }
                          {
                              drink._id ? 
                              <>
                              <Link to={`/userCocktail/${drink._id}`}><img className="rounded mb-1" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link> 
                              <Link to={`/userCocktail/${drink._id}`} style={linkStyle}>{drink.strDrink}</Link> 
                              </> : null
                          }
                      </div>
                    )) 
                  : typeof cocktailList == 'object'
                  ? cocktailList.drinkList.slice(0,numToDisplay).map(drink => (
                    <div className="d-flex flex-column mx-auto mb-3 mt-1">                     
                        {
                            drink.idDrink ? 
                            <>
                            <Link to={`/details/${drink.idDrink}`}><img className="rounded mb-1" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link> 
                            <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link> 
                            </> : null
                        }
                        {
                            drink._id ? 
                            <>
                            <Link to={`/userCocktail/${drink._id}`}><img className="rounded mb-1" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link> 
                            <Link to={`/userCocktail/${drink._id}`} style={linkStyle}>{drink.strDrink}</Link> 
                            </> : null
                        }
                    </div>
                  )) 
                  : <p className="d-flex flex-column mx-auto">Something went wrong.</p>
                  : console.log("something is seriously wrong")
                
            }
        </div>
    </>
  )
}

export default CocktailCollection
