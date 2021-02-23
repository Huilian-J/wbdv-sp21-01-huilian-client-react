import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}