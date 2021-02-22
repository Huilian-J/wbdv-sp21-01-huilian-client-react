import React from 'react'

const CourseCard = ({course}) =>
    <div className="col-3">
        <div className="card">
            {/*style={{width: "18rem"}}*/}
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Card text</p>
                <a href="#" className="btn btn-primary">Go</a>
            </div>
        </div>
    </div>

export default CourseCard