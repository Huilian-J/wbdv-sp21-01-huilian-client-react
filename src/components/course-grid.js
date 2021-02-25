import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, updateCourse, courses}) =>
    <div>
        <table className="table">
            <thead>
            <tr>
                <th>Recent Documents</th>
                <th className="d-none d-md-table-cell">
                    Owned by me
                    <i className="fas fa-sort-down"></i>
                </th>
                <th>
                    <i className="fas fa-folder"></i>
                    <i className="fas fa-sort-alpha-up-alt ml-2"></i>
                    <Link to="/courses/table">
                        <i className="fas fa-list ml-2"></i>
                    </Link>
                </th>
            </tr>
            </thead>
        </table>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}
                        key={ndx}
                        course={course}/>
                )
            }
        </div>

    </div>
export default CourseGrid