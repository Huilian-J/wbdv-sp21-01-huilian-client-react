import React from 'react'
import CourseCard from "./course-card";

const CourseGrid = ({deleteCourse, courses}) =>
    <div>
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