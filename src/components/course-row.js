import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, course}) =>
    <tr>
        <td>
            <Link to="/courses/editor">
                {course.title}
            </Link>
        </td>
        <td>{course.owner}</td>
        <td>{course.lastModified}</td>
        <td>
            <i className="fas fa-check"></i>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
        </td>
    </tr>

export default CourseRow