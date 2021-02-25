import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, updateCourse, course}) => {
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

    return(
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card">
                <div className="card-body">
                    {
                        !editing &&
                        <h5 className="card-title">{course.title}</h5>}
                    {
                        editing &&
                        <input onChange={(event) => setNewTitle(event.target.value)}
                               value={newTitle}
                               className="form-control"/>
                    }
                    <p className="card-text">Some description</p>
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    <div className="wbdv-card-icons">
                        {
                            !editing &&
                            <i onClick={() => {
                                setEditing(true)
                                setNewTitle(course.title)}}
                               className="fas fa-edit"></i>
                        }
                        {
                            editing &&
                            <i onClick={() => saveTitle()}
                               className="fas fa-check"></i>
                        }
                        {
                            editing &&
                            <i onClick={() => {
                                setEditing(false)
                                deleteCourse(course)}}
                               className="fas fa-trash"></i>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


export default CourseCard