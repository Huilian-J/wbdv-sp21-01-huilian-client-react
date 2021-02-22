import React from 'react'

const CourseRow = ({deleteCourse, course}) =>
    <tr>
        <td>{course.title}</td>
        <td>{course.owner}</td>
        <td>{course.lastModified}</td>
        <td>
            <i className="fas fa-check"></i>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
        </td>
    </tr>

export default CourseRow