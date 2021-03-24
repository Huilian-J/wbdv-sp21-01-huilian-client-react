import React from 'react'
import {connect} from "react-redux"
import {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
    const {moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
            // if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
            // }
        }
    , [topicId])
    return(
        <div>
            {
                ((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                    (lessonId !== "undefined" && typeof lessonId !== "undefined") &&
                    (topicId !== "undefined" && typeof topicId !== "undefined")) &&
                <>
                    <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
                    <h2>Widget List</h2>
                </>
            }
            <ul className="list-group">
                {
                    widgets.map(w =>
                    <li className="list-group-item" key={w.id}>
                        {
                            w.type === "HEADING" &&
                            <HeadingWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                        {
                            w.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size:1, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },
    updateWidget: (wid, newItem) => {
        widgetService.updateWidget(wid, newItem)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                wid: wid,
                newItem: newItem
            }))
    },
    deleteWidget: (wid) => {
        widgetService.deleteWidget(wid)
            .then(status =>
                dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: wid
                }))
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)