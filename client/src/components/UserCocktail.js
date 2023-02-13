import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const UserCocktail = () => {

    const [ cocktail, setCocktail ] = useState({});
    const [ creator, setCreator ] = useState(false);
    const { loggedIn, email } = useContext(UserContext);

    const imgStyle = {
        height: '30vh'
    }
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/getOne/${id}`)
            .then((res) => {
                isCreator(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    const isCreator = (cocktail) => {
        setCocktail(cocktail)
        if(cocktail.creator == email) {
            setCreator(true)
        } else {
            setCreator(false)
        }
    }

    const deleteCocktail = (id) => {
        axios
            .delete(`http://localhost:8000/api/delete/${id}`, {withCredentials:true, credentials:'include'})
            .then((res) => navigate('/'))
            .catch(err => console.log(err))
    }

    const divStyle = {
        minHeight: "60vh"
    }


  return (
    <div className="pt-3" style={divStyle}>
        <h1>{ cocktail.strDrink }</h1>

        <div className="d-flex flex-wrap mx-auto col-md-10 col-12 justify-content-between align-items-start">

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
        {
            creator ?
                <div>
                    <Link className="btn btn-dark me-3" to={`/edit/${cocktail._id}`}>Edit</Link>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                </div>
            : null
        }



        <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="modalWarning" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalWarningText">Warning</h5>
                <button type="button" className="close btn border" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Are you sure you want to delete {cocktail.strDrink}? This cannot be undone.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-dark" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" onClick={()=>deleteCocktail(cocktail._id)} data-dismiss="modal">Yes, Delete</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserCocktail