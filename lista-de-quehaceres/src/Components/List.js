import React from 'react'

export const List = ({ toDo, deleteToDo }) => {
    const underline = (e) => {
        let id = document.getElementById(e.target.id);
        e.target.checked ? id.style.textDecoration = 'line-through' :id.style.textDecoration = 'none';
    }
    const pressDelete = (e) =>{
        deleteToDo(e.target.id)
    }
    const createToDo = (item, index) => {
        return (
            <>
                <li key = {index} className="list-group-item form-check">
                    
                        <label id={index} className="form-check-label" >
                            {item}
                        </label>
                        <input id= {index} className="form-check-input" type="checkbox" onChange={(e) => underline(e)}/>
                        <button 
                            className="btn position-absolute top-50 start-100 translate-middle btn btn-dark"
                            id = {index}
                            onClick = {pressDelete}
                        >
                            Delete
                        </button>    
                </li>
                
            </>



        );
    }

    return (
                <>
                    {
                        toDo.map((item, index) => createToDo(item, index))
                    }
                </>
    )
}
