import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course}) =>
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
            {/*style={{width: "18rem"}}*/}
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Card text</p>
                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash float-right"></i>
            </div>
        </div>
    </div>

export default CourseCard