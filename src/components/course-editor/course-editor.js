import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {useParams} from "react-router-dom";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    const [courseTitle, setCourseTitle] = useState("")
    useEffect(()=> {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
    }, [])

    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`} className="btn margin-left-10">
                        <i className="fa fa-times fa-2x"></i>
                    </Link>
                    <i className="margin-left-10">{courseTitle}</i>
                </h2>
                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <TopicPills/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor