import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager
    extends React.Component {

    state = {
        courses: []
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses:
                        prevState.courses.filter(course => course != courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager