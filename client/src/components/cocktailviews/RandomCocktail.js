import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomCocktail = () => {

    const [ cocktail, setCocktail ] = useState("");
    const imgStyle = {
        height: '30vh'
    }
    const phantomDiv = {
        height: '20vh'
    }

    useEffect(()=>{
        axios
            .get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
            .then((res) => setCocktail(res.data.drinks[0]))
            .catch(err => console.log(err))
    }, [])
    
  return (
    <div className="mt-3">
        <h1>{ cocktail.strDrink }</h1>
        <div className="d-flex flex-wrap mx-auto col-md-8 col-12 justify-content-between align-items-start">

            <div className="col-lg-4 col-12">
                <img src={cocktail.strDrinkThumb} style={imgStyle} className="rounded float-left"/>
            </div>

            <div className="px-5 py-3 col-lg-4 col-12">
                <h6>Ingredients:</h6>
                <table className="table-borderless col-12">
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient1 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure1 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient2 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure2 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient3 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure3 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient4 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure4 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient5 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure5 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient6 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure6 }</td>
                    </tbody>
                    <tbody>
                        <td className="text-start">{ cocktail.strIngredient7 }</td>
                        <td></td>
                        <td className="text-end">{ cocktail.strMeasure7 }</td>
                    </tbody>
                </table>
            </div>

            <div className="px-5 py-3 col-lg-4 col-12">
                <h6>Instructions:</h6>
                <p>{cocktail.strGlass} recommended.</p>
                { cocktail.strInstructions }
            </div>
            
        </div>
        <div style={phantomDiv}></div>
    </div>
  )
}

export default RandomCocktail