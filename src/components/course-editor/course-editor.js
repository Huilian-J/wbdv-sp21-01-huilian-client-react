import React from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <a className="btn margin-left-10">
                        <i onClick={() => history.goBack()}
                           className="fa fa-times fa-2x"></i>
                    </a>
                    <i className="margin-left-10">CSXXXX - Course</i>
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
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