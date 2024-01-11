import React, {useEffect, useReducer} from 'react'

import axios from 'axios'

function DataAllposts() {
    
    const initialState = {
        loading: true,
        error : '',
        blogs: {}
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading : false,
                    blogs: action.payload,
                    error : ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading : false,
                    blogs: {},
                    error : 'Something went wrong'
                }
            default :
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        axios.get('https://expressbackenddev4g2-jv4h.onrender.com/allposts')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch((error) => {
            dispatch({type: 'FETCH_ERROR'})
        });
    }, [])

  return (
    <React.Fragment>
        {state.loading ? 'loading' : state.blogs.map((blog, index)=>{
            return(
                <div>
                    <h2>Titre : {blog.titre}</h2>
                    <p>Auteur : {blog.auteur}</p>
                    <p>description : {blog.description}</p>
                </div>
            )
        })}

    </React.Fragment>
  )
}

export default DataAllposts