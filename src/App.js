import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true} component={Home}/>
              <Route path="/courses/:layout" exact={true} component={CourseManager}/>
              <Route path={[
                  "/courses/:layout/edit/:courseId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets",
                  "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
