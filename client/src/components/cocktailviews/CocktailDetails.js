import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

const CocktailDetails = () => {

    const [ cocktail, setCocktail ] = useState("");
    const [ allColl, setAllColl ] = useState([]);
    const [ selectedColl, setSelectedColl ] = useState("");
    const { user } = useContext(UserContext);

    // console.log("---------------", collections)
    
    const imgStyle = {
        height: '30vh'
    }

    const {id} = useParams();

    const divStyle = {
        minHeight: "52vh"
    }

    const addToCollection = (collId) => {
        const newDrink = {
            key: cocktail.idDrink,
            strDrinkThumb: cocktail.strDrinkThumb,
            strDrink: cocktail.strDrink
        }

        console.log("====================", newDrink)

        axios
            .put(`http://localhost:8000/api/addtocollection/${collId}`, newDrink)
            .then((res) => setCocktail(res.data.drinks[0]))
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios
          .get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
          .then((res) => setCocktail(res.data.drinks[0]))
          .catch(err => console.log(err))

        axios
          .get(`http://localhost:8000/api/viewcollections`)
          .then((res) => setAllColl(res.data))
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

        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#collectionModal">Add to Collection</button>
        </div>

        <div className="modal fade" id="collectionModal" tabIndex="-1" role="dialog" aria-labelledby="modalWarning" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalWarningText">Choose a Collection</h5>
                <button type="button" className="close btn border" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                To which collection would you like to add this drink?
                {
                    allColl ? 
                    allColl.map(collection => <button onClick={()=>setSelectedColl(collection._id)}>{collection.title}</button>) : "no"
                }
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-outline-dark" onClick={()=>addToCollection(selectedColl)} data-dismiss="modal">Add</button>
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CocktailDetails
