import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicActions from "../../actions/topic-actions";

const TopicPills = (
    {
        topics=[],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson
    }) =>
{
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(()=> {
        if((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
            (lessonId !== "undefined" && typeof lessonId !== "undefined")) {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <ul className="nav nav-pills">
                {
                    ((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                        (lessonId !== "undefined" && typeof lessonId !== "undefined")) &&
                    topics.map(topic =>
                        <li className="nav-item" key={topic._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                {
                    ((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                        (lessonId !== "undefined" && typeof lessonId !== "undefined")) &&
                    <li className="nav-item">
                        <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
                    </li>
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId),
    createTopic: (lessonId) => topicActions.createTopic(dispatch, lessonId),
    updateTopic: (newItem) => topicActions.updateTopic(dispatch, newItem),
    deleteTopic: (topicToDelete) => topicToDelete.deleteTopic(dispatch, topicToDelete)
})

export default connect(stpm, dtpm)(TopicPills)