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
                    <Link to={`/courses/table/edit/${course._id}`}>
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
            <td className="d-none d-md-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td>

                {!editing &&
                <i onClick={() => {
                    setEditing(true)
                    setNewTitle(course.title)
                }}
                   className="fas fa-edit wbdv-fa-blue"></i>}

                {editing &&
                <i onClick={() => saveTitle()}
                   className="fas fa-check wbdv-fa-green"></i>}

                {editing &&
                <i onClick={() => {
                    setEditing(false)
                    deleteCourse(course)}}
                   className="fas fa-times ml-2 wbdv-fa-red"></i>}
            </td>
        </tr>

    )
}

export default CourseRow