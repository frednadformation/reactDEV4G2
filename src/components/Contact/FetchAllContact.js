import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import { Button } from '../Button.style';

function FetchAllContact() {

    const initialState ={
        loading : true,
        error: '',
        contacts : {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return{
                    loading : false,
                    contacts : action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return{
                    loading : false,
                    contacts : {},
                    error: action.payload
                }
            default:
                return state               
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://expressbackenddev4g2-jv4h.onrender.com/')
        .then(response =>{
            dispatch({type : 'FETCH_SUCCESS', payload: response.data})
        })
        .catch((error)=>{
            dispatch({type : 'FETCH_ERROR', payload : error.message})
            console.log(error);
        })
    },[])


  return (
    <div>
    {state.error}
        {state.loading ? 'Loading...' : state.contacts.map((contact, index) =>{
            return(

                
                    <div key={index}>
                    <Link to={`/contact/${contact._id}`}>
                        <h1>{contact.lastName}</h1>
                        <h1>{contact.firstName}</h1>
                    </Link>

                        <p>_id : {contact._id}</p>
                        <p>{contact.email}</p>
                        <p>message : {contact.message}</p>
                        <hr />
                    </div>
       
            )
        })}
        {state.error.message}
    </div>
  )
}

export default FetchAllContact