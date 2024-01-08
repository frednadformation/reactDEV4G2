import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

function DataTodosReducer() {
    const initialState = {
        loading: true,
        error : '',
        todos: {}
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading : false,
                    todos: action.payload,
                    error : ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading : false,
                    todos: {},
                    error : 'Something went wrong'
                }
            default :
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch((error) => {
            dispatch({type: 'FETCH_ERROR'})
        });
    }, [])  

  return (
    <div>
        {state.loading ? 'loading ....' : state.todos.map((todo, index) =>{
            let color = todo.completed ? 'green' : 'red';
                {/* <div className={color} key={todo.id}> */}
            return(
                <div className={color} key={index}>
                    <h2>Titre : {todo.title}</h2>
                    <p>userId : {todo.userId}</p>
                    <p>completed : {todo.completed ? "completed" : "not completed"}</p>
                    <hr/>
                </div>
            )

        })}


    </div>
  )
}

export default DataTodosReducer