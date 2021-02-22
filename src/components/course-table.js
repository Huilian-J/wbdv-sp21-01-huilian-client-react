import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Course Table</h2>
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                key={ndx}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}