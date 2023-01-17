import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Favorites = () => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '#']

    const btnStyle = {
        display:'inline-block'
    }

    const imgStyle = {
        height: '25vh'
    }
    
    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    const [ start, setStart ] = useState(0);
    const [ end, setEnd ] = useState(5);

    const displayPage = (num) => {
        if(num==1) {
            setStart(0);
        } else{
            setStart((num-1)*6);
        }
        setEnd(num+5);
        console.log("start", start)
        console.log("end", end)
    }

    const [ cocktailList, setCocktailList ] = useState([]);

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
    }

  return (
    <div>
        {/* <div className="container d-flex flex-column align-items-center col-12 my-2">
            <h2>Favorites</h2>
            <div>
                {
                    alphabet.map(char => (
                        <button className="btn p-1 m-1 shadow-none btn-dark" style={{btnStyle}}> 
                        &nbsp;{char.toUpperCase()}&nbsp;
                    </button>
                    ))
                } 
            </div>
        </div> */}

        {/* <div className="d-flex flex-wrap col-lg-10 col-12 mx-auto">
        {
            cocktailList ? cocktailList.map(drink => (
                <div className="d-flex flex-column mx-auto">
                    <Link to={`/details/${drink.idDrink}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                    <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
                </div>
            )) : <p className="d-flex flex-column mx-auto">No favorites found! Browse through the site to find some cocktails you want to try.</p>
        }
    </div> */}
///
    <h1>Experimental:</h1>

    <div className="d-flex flex-wrap col-lg-10 col-12 mx-auto">
        {
            cocktailList ? cocktailList.slice(start,end).map(drink => (
                <div className="d-flex flex-column mx-auto">
                    <Link to={`/details/${drink.idDrink}`}><img className="p-2" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link>
                    <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link>
                </div>
            )) : <p className="d-flex flex-column mx-auto">No favorites found! Browse through the site to find some cocktails you want to try.</p>
        }
    </div>
    <div className="btn-group me-2 mt-3" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-dark" onClick={()=>displayPage(1)}>1</button>
        <button type="button" className="btn btn-outline-dark" onClick={()=>displayPage(2)}>2</button>
        <button type="button" className="btn btn-outline-dark">3</button>
        <button type="button" className="btn btn-outline-dark">4</button>
    </div>

    </div>
  )
}

export default Favorites