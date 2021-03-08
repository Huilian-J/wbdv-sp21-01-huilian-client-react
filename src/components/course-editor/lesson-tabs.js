import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService, {findLessonsForModule} from '../../services/lesson-service'
import {findModulesForCourse} from "../../services/module-service";

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        findLessonsForModule
    }) =>
{
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(()=> {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lesson Tabs</h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                <li className="nav-iem">
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
    },
    createLesson: (moduleId) => {
        console.log("CREATE" + moduleId)
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson: lesson
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)