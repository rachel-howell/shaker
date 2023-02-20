import './App.css';
import NavBar from './components/NavBar';
import CocktailDetails from './components/cocktailviews/CocktailDetails';
import RandomCocktail from './components/cocktailviews/RandomCocktail';
import SearchResults from './components/lists/SearchResults';
import IngredientSearchResults from './components/lists/IngredientSearchResults';
import Footer from './components/Footer';
import UserLogin from './components/userforms/UserLogin';
import AddNew from './components/userforms/AddNew';
import UserCocktail from './components/cocktailviews/UserCocktail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrowseAll from './components/lists/BrowseAll';
import { useEffect, useState } from 'react'
import RegistrationForm from './components/userforms/RegistrationForm';
import EditCocktail from './components/userforms/EditCocktail';
import axios from 'axios';
import ThankYou from './components/userforms/ThankYou';
import { UserContext, UserProvider } from './components/UserContext';
import React, { useContext } from 'react';
import Homepage from './components/Homepage'
import ViewCollection from './components/lists/ViewCollection';
import NewCollection from './components/userforms/NewCollection';
import ViewAllCollections from './components/lists/ViewAllCollections';

function App() {

  const { loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(()=>{
    axios
      .get('http://localhost:8000/api/checkloginstatus', {withCredentials:true, credentials:'include'})
      .then((res)=> {
        if(res.data == "true"){
          setLoggedIn(true);
        }else{
          setLoggedIn(false);
        }
      })
      .catch(err=>console.log(err))

  })

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/random" element={<RandomCocktail />}/>
            <Route path="/search/:name" element={<SearchResults />}/>
            <Route path="/search/" element={<SearchResults />}/>
            <Route path="/isearch/:ingredient" element={<IngredientSearchResults />} />
            <Route path="/isearch/" element={<IngredientSearchResults />} />
            <Route path="/browse" element={<BrowseAll />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/details/:id" element={<CocktailDetails />}/>
            <Route path="/userCocktail/:id" element={<UserCocktail />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/addNew" element={<AddNew />} />
            <Route path="/success" element={<ThankYou />} />
            <Route path="/edit/:id" element={<EditCocktail />} />
            <Route path="/viewcollection/:id" element={<ViewCollection />} />
            <Route path="/addcollection" element={<NewCollection />} />
            <Route path="/browsecollections" element={< ViewAllCollections />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
