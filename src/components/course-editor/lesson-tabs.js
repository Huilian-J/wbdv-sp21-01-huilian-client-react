import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService, {findLessonsForModule} from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        updateLesson,
        deleteLesson,
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
            <ul className="nav nav-tabs">
                {
                    (moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                {
                    (moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                    <li className="nav-item">
                        <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
                    </li>
                }
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
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson: lesson
            }))
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                updateLesson: newItem
            }))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lessonToDelete
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)