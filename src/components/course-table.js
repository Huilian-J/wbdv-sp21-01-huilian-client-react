import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {
    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                    <CourseRow title="CS1234" owner="alice" lastModified="1/1/20"/>
                    <CourseRow title="CS2345" owner="bob" lastModified="1/1/21"/>
                    </tbody>
                </table>
            </div>
        )
    }
}