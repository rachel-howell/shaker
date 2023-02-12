import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/SearchResults';
import IngredientSearchResults from './components/IngredientSearchResults';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';
import AddNew from './components/AddNew';
import UserCocktail from './components/UserCocktail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrowseAll from './components/BrowseAll';
import { useEffect, useState } from 'react'
import RegistrationForm from './components/RegistrationForm';
import EditCocktail from './components/EditCocktail';
import axios from 'axios';
import ThankYou from './components/ThankYou';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ email, setEmail ] = useState("");

  useEffect(()=>{
    axios
      .get('http://localhost:8000/api/checkloginstatus', {withCredentials:true, credentials:'include'})
      .then((res)=> {
        if(res.data == "true"){
          setLoggedIn(true);
          console.log(email)
        }else{
          setLoggedIn(false);
        }
      })
      .catch(err=>console.log(err))

  })

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/random" element={<RandomCocktail />}/>
          <Route path="/details/:id" element={<CocktailDetails email={email}/>}/>
          <Route path="/search/:name" element={<SearchResults />}/>
          <Route path="/search/" element={<SearchResults />}/>
          <Route path="/isearch/:ingredient" element={<IngredientSearchResults />} />
          <Route path="/isearch/" element={<IngredientSearchResults />} />
          <Route path="/browse" element={<BrowseAll />} />
          <Route path="/login" element={<UserLogin setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/success" element={<ThankYou />} />
          <Route path="/addNew" element={<AddNew email={email}/>} />
          <Route path="/userCocktail/:id" element={<UserCocktail loggedIn={loggedIn} email={email}/>} />
          <Route path="/register" element={<RegistrationForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
          <Route path="/edit/:id" element={<EditCocktail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
