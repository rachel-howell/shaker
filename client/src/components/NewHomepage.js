import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CocktailCollection from './lists/CocktailCollection';
import { UserContext } from './UserContext';
import axios from 'axios';
import AltNavBar from './AltNavBar';

const Homepage = () => {

    const navigate = useNavigate();
    const [ userInput, setUserInput ] = useState("");
    const [ searchByName, setSearchByName ] = useState(true);
    const { setCollections } = useContext(UserContext);
    const { navShow, setNavShow } = useContext(UserContext);

    const imgStyle = {
      height: '100vh',
      width: 'auto',
    }
    const imgStyleSmol = {
      height: '100vh',
      width: 'auto',
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0',
      textAlign: 'center'
    }

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

    // let homeCollections = {
    //     userCocktails: 'http://localhost:8000/api/getAll',
    //     trendingCocktails: `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`
    // }

    useEffect(()=>{
      axios
          .get('http://localhost:8000/api/usercollections')
          .then((res) => 
          console.log(res)
          )
          .catch(err => {
              console.log(err)
          })
      
      setNavShow(false)
  }, [])


  return (
    <div className="flex flex-col bg-[#fbf6ee] h-screen">
      <div className="flex flex-row">

        <div className="xl:w-1/3 lg:w-7/12 w-5/6 mx-auto mt-64 z-50 xl:bg-[#fbf6ee] bg-opacity-75 rounded-xl p-5">
            <h1 className="text-5xl font-serif border-4 sm:border-red-500 lg:border-green-400 xl:border-black">Cocktail Recipe Search</h1>
            
            <form className="p-3 w-5/6 flex flex-col mx-auto" onSubmit={submitHandler}>

                <div className="mb-3 mt-3">
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

                <button className="p-2 rounded-full hover:text-black hover:bg-opacity-70 duration-200 bg-[#a10d00] text-white my-2">Submit</button>
                <button className="p-2 rounded-full hover:text-black hover:bg-opacity-70 duration-200 bg-[#a10d00] text-white" onClick={randomBtn}>Random Cocktail</button>

            </form>
      </div>

        <div className="hidden xl:flex">
          <img src={require('../assets/cutedrink1.jpg')} style={imgStyle} className="rounded-2xl" alt="logo"/>
        </div>
        <div className="xl:hidden z-0">
          <img src={require('../assets/cutedrink1.jpg')} style={imgStyleSmol} className="rounded-2xl w-screen" alt="logo"/>
        </div>
        <div className="sm:hidden z-0">
          <img src={require('../assets/cutedrink.jpg')} style={imgStyleSmol} className="rounded-2xl w-screen" alt="logo"/>
        </div>
        {/* <div className="xl:hidden absolute z-0">
          <img src={require('../assets/cutedrink.jpg')} style={imgStyle} className="rounded-2xl w-screen" alt="logo"/>
        </div> */}

        {/* <div>
            <CocktailCollection url={homeCollections.userCocktails} title={'Newest Cocktails'} numToDisplay={6}/>
        </div>
        <div>
            <CocktailCollection url={homeCollections.trendingCocktails} title={'Popular Cocktails'} numToDisplay={6}/>
        </div> */}
    </div>
    </div>
    
       
  )
}

export default Homepage

// user is looking at collection and clicks the collection name
// onClick, user is directed to ViewCollection page and collection id is passed to the component
// Component displays title, description, and all drinks in the collection
