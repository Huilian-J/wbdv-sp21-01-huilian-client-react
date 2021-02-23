import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, course}) => {

    const [editing, setEditing] = useState(false)

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
                    <input value={course.title}
                           className="form-control"/>
                }
            </td>
            <td>{course.owner}</td>
            <td>{course.lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => setEditing(false)} className="fas fa-check"></i>}
            </td>
        </tr>

    )
}

export default CourseRow