import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager
    extends React.Component {

    state = {
        courses: [
            {title:"CS1234", owner:"alice", lastModified:"1/1/21"},
            {title:"CS2341", owner:"bob", lastModified:"2/2/21"},
            {title:"CS3412", owner:"charlie", lastModified:"3/3/21"},
            {title:"CS4123", owner:"dan", lastModified:"4/4/21"}

        ]
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <CourseTable courses={this.state.courses}/>
                <CourseGrid courses={this.state.courses}/>
                <CourseEditor/>
            </div>
        )
    }
}

export default CourseManager