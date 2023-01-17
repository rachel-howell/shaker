import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Trending from './Trending';

const Search = () => {

    const navigate = useNavigate();
    const [ userInput, setUserInput ] = useState("");
    const [ searchByName, setSearchByName ] = useState(true);

    const randomBtn = () => {
        navigate('/random')
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        searchByName ? navigate(`/search/${userInput}`) : navigate(`/isearch/${userInput}`)
    }

    const toggleSearch = (e) => {
        setSearchByName(!searchByName);
        console.log(searchByName)
    }

  return (
    <div className="d-flex flex-column">
        <div className="col-8 mx-auto vh-75">
            <h1>Cocktail Recipe Search</h1>
            
            <form className="p-3 d-flex flex-column col-12 col-md-6 mx-auto" onSubmit={submitHandler}>

                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Type search here..." onChange={(e)=>setUserInput(e.target.value)}/>
                </div>

                <div className="d-flex mx-auto mb-3">
                    <h6>Search by:</h6>
                    <div className="px-3 d-flex flex-column align-items-start">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="searchChoice" id="drinkName" value="name" defaultChecked onChange={toggleSearch}/>
                            <label className="form-check-label">
                                Name
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="searchChoice" id="ingredient" value="ingredient" onChange={toggleSearch}/>
                            <label className="form-check-label">
                                Ingredient
                            </label>
                        </div>
                    </div>
                    
                </div>

                <input className="btn border my-2" type="submit" />
                <button className="btn border" onClick={randomBtn}>Random Cocktail</button>

            </form>
        </div>

        <div>
            <Trending />
        </div>
    </div>
  )
}

export default Search