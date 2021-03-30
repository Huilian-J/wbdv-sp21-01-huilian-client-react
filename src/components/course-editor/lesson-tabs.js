import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonActions from "../../actions/lesson-actions";

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
                        <li className="nav-item" key={lesson._id}>
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
    findLessonsForModule: (moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId),
    createLesson: (moduleId) => lessonActions.createLesson(dispatch, moduleId),
    updateLesson: (newItem) => lessonActions.updateLesson(dispatch, newItem),
    deleteLesson: (lessonToDelete) => lessonActions.deleteLesson(dispatch, lessonToDelete)
})

export default connect(stpm, dtpm)(LessonTabs)