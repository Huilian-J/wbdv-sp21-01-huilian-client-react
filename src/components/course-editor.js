import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({prop}) =>
    <div>
        <h2>
            Course Editor
            <i onClick={() => prop.history.goBack()}
               className="fas fa-times float-right"></i>
        </h2>
    </div>

export default CourseEditor