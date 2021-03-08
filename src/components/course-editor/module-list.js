import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule
    }) => {
    const {layout, courseId, moduleId} = useParams();

    return (
        <div>
            <h2>Module List</h2>
            <ul>
                <li>layout: {layout}</li>
                <li>course: {courseId}</li>
                <li>module: {moduleId}</li>
            </ul>
            <ul className="list-group">
                {
                    modules.map(module =>
                        <li className="list-group-item">
                            <EditableItem
                                to ={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                deleteItem={deleteModule}
                                updateItem={updateModule}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={createModule} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE", updateModule: newItem})
    },
    deleteModule: (itemToDelete) => {
        dispatch({type: "DELETE_MODULE", moduleToDelete: itemToDelete})
    }
})

export default connect(stpm, dtpm)(ModuleList)