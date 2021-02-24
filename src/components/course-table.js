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

                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned by</th>
                        <th>Last Modified</th>
                        <th>
                            <i className="fas fa-folder"></i>
                            <i className="fas fa-sort-alpha-up-alt ml-2"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-th ml-2"></i>
                            </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
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