import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ViewCollection = () => {

    const {id} = useParams();

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/viewcollection/${id}`)
            .then((res)=>(console.log(res)))
            .catch(err=>console.log(err))
    }, [])

  return (
    <div>
j
    </div>
  )
}

export default ViewCollection