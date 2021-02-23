import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import CourseService from "../services/course-service";

class CourseManager
    extends React.Component {

    state = {
        courses: []
    }

    componentDidMount = () =>
        CourseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        CourseService.createCourse(newCourse)
            .then(course =>
                this.setState(
                    (prevState) => ({
                    ...prevState,
                        courses: [
                            ...prevState.courses,
                            course
                        ]
                }))
            )

    }

    deleteCourse = (courseToDelete) => {
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses:
                        prevState.courses.filter(course => course != courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        CourseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.map(c => c._id === course._id? course : c)
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
                        updateCourse={this.updateCourse}
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