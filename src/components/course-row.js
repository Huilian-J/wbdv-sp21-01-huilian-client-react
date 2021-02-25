import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, updateCourse, course}) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input onChange={(event) => setNewTitle(event.target.value)}
                           value={newTitle}
                           className="form-control"/>
                }
            </td>
            <td class="d-none d-md-table-cell">{course.owner}</td>
            <td class="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>

                {!editing &&
                <i onClick={() => {
                    setEditing(true)
                    setNewTitle(course.title)
                }}
                   className="fas fa-edit"></i>}

                {editing &&
                <i onClick={() => saveTitle()}
                   className="fas fa-check"></i>}

                {editing &&
                <i onClick={() => {
                    setEditing(false)
                    deleteCourse(course)}}
                   className="fas fa-trash ml-2"></i>}
            </td>
        </tr>

    )
}

export default CourseRow