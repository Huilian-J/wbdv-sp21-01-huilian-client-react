import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router-dom";
import CourseService from "../services/course-service";

class CourseManager
    extends React.Component {

    state = {
        courses: [],
        newCourseTitle: ""
    }

    componentDidMount = () =>
        CourseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.state.newCourseTitle,
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
                        ],
                        newCourseTitle: ""
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
                <div className="wbdv-sticky-nav-bar">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2 d-none d-lg-block wbdv-nav-bar-text">
                            <h5>Course Manager</h5>
                        </div>
                        <div className="col-8">
                            <input className="form-control"
                                   value={this.state.newCourseTitle}
                                   placeholder="New Course Title"
                                   onChange={(event) =>
                                       this.setState((prevState) => ({
                                           ...prevState,
                                           newCourseTitle: event.target.value
                                       }))
                                   }/>
                        </div>
                        <div className="col-1">
                            <a onClick={this.addCourse}>
                                <i className="fas fa-plus-circle fa-2x wbdv-fa-red"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="wbdv-content-blw-bar">
                    <Route path="/courses/table" exact={true}>
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                </div>
                <div className="wbdv-sticky-plus-circle">
                    <a onClick={this.addCourse}>
                        <i className="fa fa-plus-circle fa-3x wbdv-fa-red"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default CourseManager