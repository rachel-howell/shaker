import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CocktailCollection from './lists/CocktailCollection';
import { UserContext } from './UserContext';
import axios from 'axios';

const Homepage = () => {

    const navigate = useNavigate();
    const [ userInput, setUserInput ] = useState("");
    const [ searchByName, setSearchByName ] = useState(true);
    const { setCollections } = useContext(UserContext);

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

    let homeCollections = {
        userCocktails: 'http://localhost:8000/api/getAll',
        trendingCocktails: `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`
    }

    useEffect(()=>{
      axios
          .get('http://localhost:8000/api/usercollections')
          .then((res) => 
          console.log(res)
          )
          .catch(err => {
              console.log(err)
          })
  }, [])


  return (
    <div className="d-flex flex-column">
        <div className="col-8 mx-auto vh-75">
            <h1>Cocktail Recipe Search</h1>
            
            <form className="p-3 d-flex flex-column col-12 col-lg-6 mx-auto" onSubmit={submitHandler}>

                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Type search here..." onChange={(e)=>setUserInput(e.target.value)}/>
                </div>

                <div className="d-flex mx-auto mb-2">
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
            <CocktailCollection url={homeCollections.userCocktails} title={'Newest Cocktails'} numToDisplay={6}/>
        </div>
        <div>
            <CocktailCollection url={homeCollections.trendingCocktails} title={'Popular Cocktails'} numToDisplay={6}/>
        </div>
    </div>
  )
}

export default Homepage

// user is looking at collection and clicks the collection name
// onClick, user is directed to ViewCollection page and collection id is passed to the component
// Component displays title, description, and all drinks in the collection
