import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        item,
        updateItem
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <>
            {
                !editing &&
                <>
                    <Link to="/">
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)}}
                       className="fas fa-check"></i>
                    <i className="fas fa-times"></i>
                </>
            }

        </>
    )
}


export default EditableItem