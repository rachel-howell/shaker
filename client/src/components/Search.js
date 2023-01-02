import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchResults from './SearchResults';

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
    <div className="col-8 mx-auto vh-50">
        <h1>Cocktail Recipe Search</h1>
        
        <form className="p-3 d-flex flex-column col-4 mx-auto" onSubmit={submitHandler}>

            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Type search here..." onChange={(e)=>setUserInput(e.target.value)}/>
            </div>
            <div className="d-flex mx-auto mb-3">
                <h6>Search by:</h6>
                <div className="px-3 d-flex flex-column align-items-start">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="searchChoice" id="drinkName" value="name" defaultChecked onChange={toggleSearch}/>
                        <label class="form-check-label" for="drinkName">
                            Name
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="searchChoice" id="ingredient" value="ingredient" onChange={toggleSearch}/>
                        <label class="form-check-label" for="ingredient">
                            Ingredient
                        </label>
                    </div>
                </div>
                
            </div>
            <input className="btn border my-2" type="submit" />
            <button className="btn border" onClick={randomBtn}>Random Cocktail</button>
        </form>
    </div>
  )
}

export default Search