import React, { useState } from 'react'
import { List } from './List';
export const Form = () => {

    const [newToDo, setNewToDo] = useState("")
    const [toDo, setToDo] = useState([])

    const sendToDo = (event) => {
        event.preventDefault()
        if(newToDo){
            setToDo([...toDo, newToDo])
            setNewToDo('')
            event.target.reset()
        }else{
            alert('No se ingreso ninguna tarea')
        }   
    }
    const deleteToDo = (id) =>{
        const completed = toDo.filter((item,index) => index != id)
        setToDo(completed);
        
    }
    return (
        <div>
             <ul className="list-group">
                <List toDo = {toDo} deleteToDo={deleteToDo}/>
            </ul>
            <form onSubmit={sendToDo}>
                <div className="mb-3">
                    <input type="text" className="form-control" onChange={e => setNewToDo(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
