import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setItemTitle] = useState(item.title)
    const saveItemTitle = () => {
        setEditing(false)
        const newItem = {
            ...item,
            title: newTitle
        }
        updateItem(newItem)
    }

    return(
        <>
            {
                !editing &&
                <Link className={`nav-link ${active? 'active' : ''}`} to={to}>
                    {item.title}
                    <i onClick={() => {
                        setEditing(true)
                        setItemTitle(item.title)}}
                       className="fas fa-pencil-alt float-right ml-1 mt-1">
                    </i>
                </Link>

            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemTitle(e.target.value)}
                        value={newTitle}/>
                    <i onClick={() => saveItemTitle()}
                        className="fas fa-check float-right mt-2"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)}}
                        className="fas fa-times float-right mr-2 ml-2 mt-2"></i>
                </>
            }
        </>
    )
}


export default EditableItem