import React, { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../UserContext';

const NewCollection = () => {

    const { user } = useContext(UserContext);

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ drinkList, setDrinkList ] = useState([]);
    const [ creator, setCreator ] = useState(user);
    const [ privacy, setPrivacy ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const newCollection = {
            title,
            description,
            drinkList,
            creator,
            privacy
        }

        axios
            .post(`http://localhost:8000/api/createcollection`, newCollection, {withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log("RES", res)
                // navigate('/')
            })
            .catch(err => {
                if(err.response.data.errors){
                    setErrors(err.response.data.errors)
                }
                console.log("ERR", err)
            })
    }

  return (
    <div>
        <h1>Create New Collection</h1>
        <form className="p-3 d-flex flex-column col-12 col-lg-8 col-xl-6 mx-auto" onSubmit={submitHandler}>
            <div className="mb-3 col-12">
                <div className="d-flex flex-row mx-auto col-12">
                    <div className="form-floating mb-3 col-12 col-md-10 mx-auto">
                        <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)}/>
                        <label className="form-label">Collection Title</label>
                        {
                            errors.title ? <p className="text-danger">{errors.strDrink.title}</p> : null
                        }
                    </div>
                </div>

                <div className="d-flex flex-row mx-auto col-12">
                    <div className="form-floating mb-3 col-12 col-md-10 mx-auto">
                        <input className="form-control" type="text" onChange={(e)=>setDescription(e.target.value)}/>
                        <label className="form-label">Description</label>
                        {
                            errors.title ? <p className="text-danger">{errors.strDrink.title}</p> : null
                        }
                    </div>
                </div>

            </div>
            <input type="submit" className="btn btn-dark border col-3 mx-auto"/>
        </form>
    </div>
  )
}

export default NewCollection
