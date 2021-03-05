import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule
    }) =>
    <div>
        <h2>Module List</h2>
        <ul className="list-group">
            {
                modules.map(module =>
                    <li className="list-group-item">
                        <EditableItem
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

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE", updateModule: newItem})
    }
})

export default connect(stpm, dtpm)(ModuleList)