import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

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
                        <li className="nav-item">
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
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    },
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic: topic
            }))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                updateTopic: newItem
            }))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topicToDelete
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)