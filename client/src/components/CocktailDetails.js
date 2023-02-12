import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CocktailDetails = ({email}) => {

    const [ cocktail, setCocktail ] = useState("");
    const imgStyle = {
        height: '30vh'
    }

    const {id} = useParams();

    const divStyle = {
        minHeight: "52vh"
    }

    const saveDrink = (id) =>{
        axios // This axios call will get the user's current list of favorites.
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
            .then((res) => setCocktail(res.data.drinks[0]))
            .catch(err => console.log(err))
        let currentFaves = // This array will add the new cocktail to the current list of favorites.
        axios.put // This axios call will communicate with the internal database to update the user's list of favorite cocktails with the new array created above.
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
            .then((res) => setCocktail(res.data.drinks[0]))
            .catch(err => console.log(err))

    }

    useEffect(()=>{
        axios
            .get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
            .then((res) => setCocktail(res.data.drinks[0]))
            .catch(err => console.log(err))
    }, [])
    
  return (
    <div className="pt-3">
        <h1>{ cocktail.strDrink }</h1>

        <div className="d-flex flex-wrap mx-auto col-md-10 col-12 justify-content-between align-items-start" style={divStyle}>

            <div className="col-lg-4 col-12">
                <img src={cocktail.strDrinkThumb} style={imgStyle} className="img-fluid rounded float-left" alt="beverage image"/>
            </div>

            <div className="px-5 py-3 col-lg-4 col-12">
                <h5>Ingredients:</h5>
                <table className="table-borderless col-12">
                    <tbody>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient1 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure1 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient2 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure2 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient3 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure3 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient4 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure4 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient5 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure5 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient6 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure6 }</td>
                        </tr>
                        <tr>
                            <td className="text-start">{ cocktail.strIngredient7 }</td>
                            <td></td>
                            <td className="text-end">{ cocktail.strMeasure7 }</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            <div className="px-5 py-3 col-lg-4 col-12">
                <h5>Instructions:</h5>
                <p>{cocktail.strGlass} recommended.</p>
                { cocktail.strInstructions }
            </div>
        </div>

        {/* <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-danger" onClick={()=>saveDrink(cocktail._id)}>Save</button>
            <button type="button" className="btn btn-outline-danger">Share</button>
        </div> */}
        
    </div>
  )
}

export default CocktailDetails