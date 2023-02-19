import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ViewCollection = () => {

    const {id} = useParams();
    const [ coll, setColl ] = useState({});
    const [ cocktailList, setCocktailList ] = useState([])

  const imgStyle = {
    height: '23vh'
  }

  const linkStyle = {
      color: 'black',
      textDecoration: 'none'
  }

  const divStyle = {
    minHeight: '60vh'
}


    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/viewcollection/${id}`)
            .then((res)=>(setColl(res.data)))
            .catch(err=>console.log(err))
          setCocktailList(coll.drinkList)
    }, [])



  return (
    <div style={divStyle}>
      <p className="h1">{coll.title}</p>
      <p>{coll.description}</p>
      <div className="d-flex col-12 col-md-10 mx-auto my-auto flex-wrap" >
        {
          cocktailList ? cocktailList.map(drink => (
              <div className="d-flex flex-column mx-auto mb-3 mt-1">
                  {
                    drink.key ? 
                    <>
                    <Link to={`/details/${drink.key}`}><img className="rounded mb-1" src={drink.strDrinkThumb} alt="Drink" style={imgStyle}/></Link> 
                    <Link to={`/details/${drink.idDrink}`} style={linkStyle}>{drink.strDrink}</Link> 
                    </> : null
                  }
              </div>
            )) : <p className="d-flex flex-column mx-auto">Something went wrong.</p>
            }
        </div>
    </div>
  )
}

export default ViewCollection