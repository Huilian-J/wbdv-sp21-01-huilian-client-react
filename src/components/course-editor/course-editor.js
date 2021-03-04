import React from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";

const store = createStore(moduleReducer)

const CourseEditor = ({history}) =>
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
                    <ul className="list-group">
                        <li className="list-group-item">
                            Module 1 - jQuery
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item active">
                            Module 2 - React
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 4 - Native
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 5 - Angular
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 6 - Node
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 7 - Mongo
                            <i className="fa fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-plus float-right"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-8">
                    <ul className="nav nav-tabs wbdv-nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="margin-top-10">
                        Widget content here.
                    </div>
                </div>
            </div>
        </div>
    </Provider>


export default CourseEditor