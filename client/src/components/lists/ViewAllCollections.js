import React, { useState, useEffect } from 'react'
import CocktailCollection from './CocktailCollection';
import axios from 'axios'


const ViewAllCollections = () => {

    const [ collectionList, setCollectionList ] = useState([]);
    let url = 'http://localhost:8000/api/viewcollection/'

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/viewcollections`)
            .then((res)=>(setCollectionList(res.data)))
            .catch(err=>console.log(err))
    }, [])

  return (
    <div>
        <h1>Browse All Collections</h1>
        {
            collectionList.map(collection =>(
            <div>
                <CocktailCollection url={`http://localhost:8000/api/viewcollection/${collection._id}`} title={collection.title} numToDisplay={6}/>
            </div>
            ))
        }
    </div>
  )
}

export default ViewAllCollections
