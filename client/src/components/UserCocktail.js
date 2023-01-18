import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserCocktail = () => {

    const [ cocktail, setCocktail ] = useState({});
    const imgStyle = {
        height: '30vh'
    }
    const {id} = useParams();

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/getOne/${id}`)
            .then((res) => setCocktail(res.data))
            .catch(err => console.log(err))
    }, [])


  return (
    <div className="mt-1">
        <h1>{ cocktail.strDrink }</h1>

        <div className="d-flex flex-wrap mx-auto col-md-10 col-12 justify-content-between align-items-start">

            <div className="col-lg-4 col-12">
                <img src={cocktail.strDrinkThumb} style={imgStyle} className="img-fluid rounded float-left"/>
            </div>

            <div className="px-5 py-3 col-lg-4 col-12">
                <h6>Ingredients:</h6>
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
                <h6>Instructions:</h6>
                <p>{cocktail.strGlass} recommended.</p>
                { cocktail.strInstructions }
            </div>
        </div>

        <div>
            <button className="btn btn-success me-3">Edit</button>
            <button className="btn btn-danger">Delete</button>
        </div>
        
    </div>
  )
}

export default UserCocktail