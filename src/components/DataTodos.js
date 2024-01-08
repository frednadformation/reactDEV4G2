import React, {useState, useEffect} from 'react'

import axios from 'axios'

import './dataTodos.css'

function DataTodos() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //Données : toutes les todos
    const [todos, setTodos] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>{
            setLoading(false);
            setError('');
            setTodos(response.data);
        })
        .catch((error)=>{
            setLoading(false);
            setError(error.message);
            setTodos({});
        });
    })

  return (
    <div>
        {loading ? 'loading ....' : todos.map((todo, index) =>{
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

export default DataTodos