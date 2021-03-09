import React from 'react'
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

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`} className="btn margin-left-10">
                        <i className="fa fa-times fa-2x"></i>
                    </Link>
                    <i className="margin-left-10">CSXXXX - Course</i>
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                        <div className="margin-top-10">
                            Widget content here.
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor