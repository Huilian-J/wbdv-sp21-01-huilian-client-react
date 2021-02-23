import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
        <h2>Course Grid{courses.length}</h2>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        key={ndx}
                        course={course}/>
                )
            }
        </div>

    </div>
export default CourseGrid